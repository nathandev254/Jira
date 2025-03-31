import { Router } from "express";
import { CreateTasks } from "../controllers/Taskscontroller";

const TasksRouter = Router()

TasksRouter.get('/', CreateTasks )

export default TasksRouter