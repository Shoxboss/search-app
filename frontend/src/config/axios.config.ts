import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_HOST ?? "http://localhost:3000";

export const fetcher = axios.create({
  baseURL: baseUrl + "/api",
  timeout: 0,
});
