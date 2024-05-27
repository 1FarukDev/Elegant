import axios, { Axios, AxiosResponse } from "axios";

// nst DEBUG = process.env.NODE_ENV === 'development';

const REACT_APP_AFRICAN_NUPTIAL_API_URL =
  "https://jsonplaceholder.typicode.com/";

const axiosInstance = axios.create({
  baseURL: REACT_APP_AFRICAN_NUPTIAL_API_URL,
  timeout: 15000,
});

export default axiosInstance;
