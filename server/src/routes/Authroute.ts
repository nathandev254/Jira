import { Router } from "express";
import { Login, Register } from "../controllers/Authcontroller";
import { validateRequest } from "../middlewares/validationMiddleware";
import { registerSchema, loginSchema } from "../schemas/authSchemas";

const AuthRouter = Router();

AuthRouter.post("/register", validateRequest(registerSchema), Register);
AuthRouter.post("/login", validateRequest(loginSchema), Login);

export default AuthRouter;
