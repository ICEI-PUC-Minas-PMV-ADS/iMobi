import axios from "axios";
import { localStorageKeys } from "../config/localStorageKeys";

export const httpClient = axios.create({
  // baseURL: import.meta.env.VITE_API_URL
  baseURL: "http://localhost:3000/gateway"
})

httpClient.interceptors.request.use(config => {
  const token = localStorage.getItem(localStorageKeys.TOKEN);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
})
