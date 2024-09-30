import axios from "axios";

export const commonApis = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/api/v1",
  timeout: 120000,
  withCredentials: true,
});
