import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { log } from "console";


export const CreateTasks = (req: Request, res: Response): void => {
  const {email,} = req.body
  console.log('hello')
};
