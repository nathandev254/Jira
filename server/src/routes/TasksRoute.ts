import { Router } from "express";
import { CreateTask } from "../controllers/Taskscontroller";
// import { Verifytoken } from "../middlewares/Authmiddleware";


const TasksRouter = Router()

TasksRouter.post('/', CreateTask )
// TasksRouter.get('/', Verifytoken, GetTasks )
// TasksRouter.delete('/:id', Verifytoken, DeleteTasks)

export default TasksRouter