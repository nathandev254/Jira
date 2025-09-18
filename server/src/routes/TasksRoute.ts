import { Router } from "express";
import { CreateTask } from "../controllers/Taskscontroller";
import { validateRequest } from "../middlewares/validationMiddleware";
import { createTaskSchema } from "../schemas/taskSchemas";
// import { Verifytoken } from "../middlewares/Authmiddleware";


const TasksRouter = Router()

TasksRouter.post('/', validateRequest(createTaskSchema), CreateTask )


export default TasksRouter