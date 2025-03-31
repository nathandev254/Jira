import { Request, Response } from "express";

export const CreateTasks = (req: Request, res: Response): void => {
  console.log("Task has been created");
  res.send('hello there')
};
