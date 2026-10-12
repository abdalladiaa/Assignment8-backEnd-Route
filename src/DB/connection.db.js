import mongoose from "mongoose";
import { MONGO_URI } from "../lib/config/config.js";
import { logger } from "../pkg/log/logger.js";


const dbConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    logger.info("DB connected");
  } catch (err) {
    logger.error(err);
    throw new Error("fail to connect database");
  }
};

export default dbConnection;
