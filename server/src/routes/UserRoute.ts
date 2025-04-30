import { Router } from "express";
import {  GetUser, UpdateUser } from "../controllers/Usercontroller";


const UserRouter = Router()

UserRouter.get('/', GetUser )
UserRouter.put('/:id', UpdateUser)

export default UserRouter