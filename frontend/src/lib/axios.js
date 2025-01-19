import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://real-chat-app-w83z.onrender.com/api/",
  withCredentials: true,
});
