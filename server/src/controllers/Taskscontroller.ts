import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";


export const CreateTasks = (req: Request, res: Response): void => {
  const Task = req.body
};
