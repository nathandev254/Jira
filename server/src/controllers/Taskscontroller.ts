import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { JwtPayload } from "jsonwebtoken";

const prisma = new PrismaClient();

export const CreateTasks = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = (req.user as JwtPayload).id;
    const data = req.body;
    const task = await prisma.task.create({ ...data, userId });
    // console.log(data);
    res.status(200).json({ message: "Task Created succefully", task });
  } catch (error) {
    res.status(500).json({ error: "Internal Server error" });
  }
};

export const GetTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req.user as JwtPayload).id;
    const Tasks = prisma.task.findMany({ where: { UserId: userId } });
    res.status(200).json({ message: "Tasks fetched", Tasks });
  } catch (error) {
    res.status(500).json("failed to fetch the tasks");
  }
};
