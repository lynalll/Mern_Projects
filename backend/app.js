import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";
const app = express();

// Load environment variables from config.env
dotenv.config({ path: "./config/config.env" });

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    method:["POST"],
    credentials:true,
}))
// Middleware to parse incoming JSON requests
app.use(express.json()); // Add parentheses to invoke the function
app.use(express.urlencoded({ extended: true }));

// Use messageRouter for handling message routes
app.use("/api/v1/message", messageRouter);

// Connect to the database
dbConnection();

export default app;
