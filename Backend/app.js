import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import createUser from "./routes/createUser.routes.js";
import userLogin from "./routes/login.routes.js";
import display from "./routes/dataDisplay.routes.js";


import cors from "cors";

export const app = express();

app.use(cors({
  origin: "*", 
}));


app.use(express.json());

// API route
app.use("/api", createUser);
app.use("/api", userLogin);
app.use("/api", display);





// Start the server

