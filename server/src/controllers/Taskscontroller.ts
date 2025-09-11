import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const CreateTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const userid = "test-user-id";
    const { title, description, priority, status, dueDate, assignee } = req.body;

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
        userid, 
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
    const userid = "test-user-id";
    const tasks = await prisma.task.findMany({
      where: { userid },
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json({ message: "Tasks fetched", tasks });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Failed to fetch the tasks" });
  }
};

export const DeleteTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const userid = "test-user-id";
    const taskId = req.params.id;

    const task = await prisma.task.findUnique({ where: { id: taskId } });

    if (!task || task.userid !== userid) {
      res.status(404).json({ message: "Task not found or not authorized" });
      return;
    }

    await prisma.task.delete({ where: { id: taskId } });

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Failed to delete task" });
  }
};
