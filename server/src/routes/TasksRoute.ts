import { Router } from "express";
import { CreateTasks, GetTasks } from "../controllers/Taskscontroller";
import { Verifytoken } from "../middlewares/Authmiddleware";


const TasksRouter = Router()

TasksRouter.post('/', CreateTasks )
TasksRouter.get('/', Verifytoken, GetTasks )

export default TasksRouter