import { generateToken } from "../../lib/utils/response/token/token.js";
import userError from "../user/user.error.js";
import * as authRepo from "./auth.repo.js";

export const signup = async (userData) => {
  const userExist = await authRepo.getUserByEmail(userData.email);
  if (userExist) {
    throw userError.userAlreadyExists();
  }

  return await authRepo.createUser(userData);
};

export const signin = async (userData) => {
  const userExist = await authRepo.getUserByEmail(userData.email);
  if (!userExist || userExist.password != userData.password) {
    throw userError.invalidCredentials();
  }

  const token = generateToken({
    payload: {
      id: userExist._id,
      email: userExist.email,
      name: userExist.name,
    },
  });

  return token;
};
