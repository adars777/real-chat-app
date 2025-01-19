import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { app,server } from "./lib/socket.js";

dotenv.config();


app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "https://real-chat-frontend.onrender.com/",
    credentials: true,
  })
);

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("this is index page");
});

// route for authentication
app.use("/api/auth", authRoutes);

// route for messaging
app.use("/api/messages", messageRoutes);

server.listen(port, () => {
  console.log(`Server is running on PORT: http://localhost:${port}`);
  connectDB();
});
