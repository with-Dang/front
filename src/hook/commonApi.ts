/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import store from "../redux/store";

export const axiosInstance = axios.create({
  baseURL:
    // import.meta.env.VITE_LOCAL_URL +
    "http://localhost:8080/v1",
  timeout: 120000,
  withCredentials: true,
});

export interface HttpClient extends AxiosInstance {
  get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T = unknown>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;
  put<T = unknown>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;
  patch<T = unknown>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;
  delete<T = unknown>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;
}

export const commonApis: HttpClient = axiosInstance;

// TODO: token 빼기
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = store.getState().auth.session;
    console.log("🚀 ~ token:", token);

    if (token) {
      // config.headers["Cookie"] = `JSESSIONID ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    // const { config, response } = err;
    console.log(err);
    // access token 만료 시
    // if (response?.status && response?.status === 403) {
    //   if (typeof window !== "undefined") {
    //     window.location.href = "/login";
    //   }
    //   localStorage.clear();
    //   return config;
    // }
    return Promise.reject(err);
  }
);

export default axiosInstance;
