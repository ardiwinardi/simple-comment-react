import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import cookieService from "./cookie.service";

export default function createAxiosInstance(baseURL: string) {
  const api = axios.create({
    baseURL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    timeout: 6000,
  });

  api.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      const token = cookieService.getToken();
      if (token) {
        Object.assign(config.headers, { Authorization: `Bearer ${token}` });
      }
      return config;
    },
    error => Promise.reject(error)
  );

  api.interceptors.response.use(
    response => response,
    error => {
      if ((error as AxiosError).code === "ERR_NETWORK") {
        console.log("the internet connection is lost");
      }
      return Promise.reject(error.response?.data?.message ?? "Unknown Error");
    }
  );
  return api;
}
