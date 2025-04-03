import { Router } from "express";
import { GetUser } from "../controllers/Usercontroller";


const UserRouter = Router()

UserRouter.get('/', GetUser )

export default UserRouter