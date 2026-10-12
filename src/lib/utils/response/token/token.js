import jwt from "jsonwebtoken";
import env from "../../../config/config.js";

export const generateToken = ({
  payload,
  secret = env.jwt.access_token.secret,
  expiresIn = env.jwt.access_token.expiresIn,
}) => {
  return jwt.sign(payload, secret, {
    expiresIn,
  });
};
