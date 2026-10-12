import { resolve } from "node:path";
import { config } from "dotenv";

export const NODE_ENV = process.env.NODE_ENV;

const envPath = {
  development: `.env.development`,
  production: `.env.production`,
};

config({ path: resolve(`${envPath[NODE_ENV]}`) });

const env = {
  port: process.env.PORT || 3000,
  mongo: {
    uri: process.env.MONGO_URI,
  },
  jwt: {
    access_token: {
      secret: process.env.JWT_ACCESS_SECRET,
      expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
    },
  },
};

export default env;
