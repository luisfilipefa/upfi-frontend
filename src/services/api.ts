import axios, { AxiosResponse } from "axios";

import { handleSignOut } from "../context/AuthContext";
import { parseCookies } from "nookies";

let cookies = parseCookies();

export const api = axios.create({
  baseURL: process.env.API_URL || "http://localhost:3333",
  headers: {
    Authorization: `Bearer ${cookies["upfi.token"]}`,
  },
});
