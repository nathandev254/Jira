import { Request, Response } from "express";
// import { JwtPayload } from "jsonwebtoken";

import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


export const CreateTask = async (req: Request, res: Response): Promise<void> => {
  try {
    // const userId = (req.user as JwtPayload).id;
    const { title, description, priority, status, dueDate, assignee } = req.body;

    // Basic validation (optional, can also use Zod/Yup)
    if (!title || !status) {
      res.status(400).json({ message: "Title and status are required" });
      return;
    }

    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        priority,
        status,
        dueDate: dueDate ? new Date(dueDate) : null,
        assignee,
      },
    });

    res.status(201).json({
      message: "Task created successfully",
      task: newTask,
    });
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: "Failed to create task" });
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

// export const DeleteTasks = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const userid = (req.user as JwtPayload).id;
//     const taskid = req.params.id;

//     const taskexists = await prisma.task.findUnique({ where: { id: taskid } });
//     if (!taskexists) {
//       res.status(404).json({ message: "Task Doesnt exists" });
//       return;
//     }

//     await prisma.task.delete({ where: { id: taskid } });

//     res.status(200).json({ message: "Task deleted succefully" });
//   } catch (error) {
//     res.status(500).json({ error: "failed to delete task" });
//   }
// };
