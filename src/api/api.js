import axios from "axios";

export const API = axios.create({
  baseURL: import.meta.env.VITE_API,
  timeout: 1000,
  headers: {
    "Content-Types": "appliction/json",
    "Acess-Control-Allow-Origin": "*",
  },
});
