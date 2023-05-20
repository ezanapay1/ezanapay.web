import Axios, { AxiosRequestConfig } from "axios";
import { API_URL } from "@/config";

const axios = Axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request
  .use
  // authRequestInterceptor
  ();
