import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { JwtPayload } from "jsonwebtoken";

const prisma = new PrismaClient();

export const CreateTasks = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userid = (req.user as JwtPayload).id;
    console.log(userid);
    const { title, description } = req.body;
    const task = await prisma.task.create({
      data: { title, description: description || undefined, userid },
    });
    // console.log(userExists);
    res.status(200).json({ message: "Task Created succefully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server error" });
  }
};

export const GetTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const userid = (req.user as JwtPayload).id;
    const Tasks = await prisma.task.findMany({ where: { userid } });

    res.status(200).json({ message: "Tasks fetched", Tasks });
  } catch (error) {
    res.status(500).json("failed to fetch the tasks");
  }
};
