import { Router } from "express";
import { CreateTasks, GetTasks } from "../controllers/Taskscontroller";

const TasksRouter = Router()

TasksRouter.post('/', CreateTasks )
TasksRouter.get('/', GetTasks )

export default TasksRouter