import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const CreateTasks = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = req.body;
    const task = prisma.task.create({ data });
    // console.log(data);
    res.status(200).json({ message: "Task Created succefully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server error" });
  }
};

export const GetTasks = async (req: Request, res: Response): Promise<void> => {
 try {
  res.send('Authenticated')
 } catch (error) {
  
 }
};
