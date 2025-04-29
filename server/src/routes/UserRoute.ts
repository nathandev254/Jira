import { Router } from "express";
import { CreateUser, GetUser, UpdateUser } from "../controllers/Usercontroller";


const UserRouter = Router()

UserRouter.get('/', GetUser )
UserRouter.post('/', CreateUser)
UserRouter.put('/:id', UpdateUser)

export default UserRouter