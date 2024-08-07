import { createRoute } from "@tanstack/react-router";
import SearchForm from "../components/searchForm";
import { rootRoute } from "./root";

const SearchPage = () => {
  return (
    <div className="w-full p-8">
      <SearchForm />
    </div>
  );
};

export const searchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function About() {
    return <SearchPage />;
  },
});
