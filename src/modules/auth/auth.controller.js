import { successResponse } from "../../lib/utils/response/success.response.js";
import * as authService from "./auth.service.js";

export const signup = async (req, res, next) => {
  try {
    const data = req.body;
    const user = await authService.signup(data);
    successResponse({
      res,
      message: "user created successfully",
      status: 201,
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

export const signin = async (erq, res, next) => {
  try {
    const data = req.body;
    const token = await authService.signin(data);
    successResponse({
      res,
      message: "user Logged in successfully",
      data: token,
      status: 200,
    });
  } catch (err) {
    next(err);
  }
};
