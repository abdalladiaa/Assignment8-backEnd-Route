import { Router } from "express";
import * as authController from "./auth.controller.js";
import { validateBody } from "../../middleware/validation.middleware.js";
import { signinDto, signupDto } from "./auth.dto.js";

const authRouter = Router();

authRouter.post("/signup", validateBody(signupDto), authController.signup);
authRouter.post("/signin", validateBody(signinDto), authController.signin);

export default authRouter;
