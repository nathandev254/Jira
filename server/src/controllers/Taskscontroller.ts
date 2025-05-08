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
    console.log(req.user)
    // const { title, description } = req.body;
    // const task = await prisma.task.create({
    //   data: { title, description, userid },
    // });
    // // console.log(data);
    res.status(200).json({ message: "Task Created succefully"});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server error" });
  }
};

export const GetTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const userid = (req.user as JwtPayload).UserId;
    // const Tasks = await prisma.task.findMany({ where: { UserId : userid } });
    res.status(200).json({ message: "Tasks fetched" });
  } catch (error) {
    res.status(500).json("failed to fetch the tasks");
  }
};
