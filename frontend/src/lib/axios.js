import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://real-chat-app-w83z.onrender.com/api/",
  withCredentials: true,
});
