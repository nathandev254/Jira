import { Router } from "express";
import { CreateUser, GetUser } from "../controllers/Usercontroller";


const UserRouter = Router()

UserRouter.get('/', GetUser )
UserRouter.post('/', CreateUser)

export default UserRouter