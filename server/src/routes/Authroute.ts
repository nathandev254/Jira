import { Router } from "express";
import { Register } from "../controllers/Authcontroller";

const AuthRouter = Router();

AuthRouter.post('/', Register)

export default AuthRouter