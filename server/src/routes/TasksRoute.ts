import { Router } from "express";
import { CreateTasks, DeleteTasks, GetTasks } from "../controllers/Taskscontroller";
import { Verifytoken } from "../middlewares/Authmiddleware";


const TasksRouter = Router()

TasksRouter.post('/', Verifytoken, CreateTasks )
TasksRouter.get('/', Verifytoken, GetTasks )
TasksRouter.delete('/:id', Verifytoken, DeleteTasks)

export default TasksRouter