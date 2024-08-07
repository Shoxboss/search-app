import { useState } from "react";
import axios, { CancelTokenSource } from "axios";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { fetcher } from "../../config/axios.config";
import { IUser } from "../../interfaces/user.interface";

const SearchForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Pick<IUser, "email"> & Partial<Pick<IUser, "number">>>();

  const [results, setResults] = useState<Array<IUser>>([]);

  const [loading, setLoading] = useState(false);
  const [cancelSource, setCancelSource] = useState<CancelTokenSource | null>(
    null
  );

  const onSubmit = async (data: { email: string; number?: string }) => {
    if (cancelSource) {
      cancelSource.cancel("Operation canceled due to new request.");
    }

    const newCancelSource = axios.CancelToken.source();
    setCancelSource(newCancelSource);
    setLoading(true);

    try {
      const response = await fetcher.post("/search", data, {
        cancelToken: newCancelSource.token,
      });
      setResults(response.data);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled", (error as Error).message);
      } else {
        console.error("Error:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 flex flex-col gap-2 rounded-lg  w-96 shadow-md mx-auto"
      >
        <h2 className=" text-black text-xl font-semibold">Search Users:</h2>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-base">Email:</label>
          <input
            className="border border-gray-200 rounded-md px-2 py-1"
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-base">Number:</label>
          <InputMask
            mask="99-99-99"
            className="border border-gray-200 rounded-md px-2 py-1"
            onChange={(e) => {
              setValue("number", e.target.value.replace(/-/g, ""));
            }}
          />
        </div>
        <button
          type="submit"
          className={
            " px-4 py-2 rounded hover:opacity-80 " +
            (loading ? "bg-gray-400 text-gray-700" : "bg-blue-500  text-white")
          }
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
      <div className="flex flex-col gap-4 w-[30rem] border-gray-100 border rounded-lg mx-auto p-4">
        <h2 className=" font-semibold text-lg">Results:</h2>
        <ul className="flex flex-col gap-2">
          {results.map((item, index) => (
            <>
              <li key={index} className="flex flex-col gap-1">
                <p className="font-semibold text-base text-black">
                  {item.email}
                </p>
                <span className="font-medium text-sm text-gray-600">
                  {item.number}
                </span>
              </li>
              <hr className=" border-gray-400" />
            </>
          ))}
          {results.length === 0 && (
            <li className="m-auto font-semibold text-gray-400">No Data</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchForm;
