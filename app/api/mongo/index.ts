import axios from "axios";

export const mongo_api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_MONGO,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
  },
});
