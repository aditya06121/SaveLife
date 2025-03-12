import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded()); //for parsing data from url
app.use(cookieParser()); //accessing the cookies of the user

//router
import userRouter from "./routes/user.routes.js";

//routes declaration
app.use("/api/users", userRouter);

export default app;
