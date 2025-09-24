import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-app-backend-qpc8.onrender.com/api",
  withCredentials: true,
});
