import { Router } from "express";
import { CreateTasks } from "../controllers/Taskscontroller";
// import { Verifytoken } from "../middlewares/Authmiddleware";


const TasksRouter = Router()

TasksRouter.post('/', CreateTasks )
// TasksRouter.get('/', Verifytoken, GetTasks )
// TasksRouter.delete('/:id', Verifytoken, DeleteTasks)

export default TasksRouter