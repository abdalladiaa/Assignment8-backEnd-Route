import { PORT } from "./lib/config/config.js";
import express from "express";
import AppError from "./pkg/error/error.js";
import errorMiddleWare from "./middleware/error.middleware.js";
import authRouter from "./modules/auth/auth.routes.js";
import userRouter from "./modules/user/user.routes.js";
import { logger } from "./pkg/log/logger.js";
import dbConnection from "./DB/connection.db.js";
import noteRouter from "./modules/note/note.routes.js";
import cookieParser from "cookie-parser";

const app = express();
//convert buffer data
app.use(express.json());

//parse the cookie
app.use(cookieParser())

//db connect
await dbConnection();

//application routing
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/note", noteRouter);

//invalid routing
app.use((req, res, next) => {
  next(new AppError("Route not found", 404));
});

//error-handling
app.use(errorMiddleWare);

app.listen(PORT, () => {
  logger.info(`server is running on port ${PORT}`);
});
