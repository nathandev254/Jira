import { PrismaClient, User } from "@prisma/client";
import { Response, Request } from "express";

const prisma = new PrismaClient();
export const CreateUser = (req: Request, res: Response) => {
  
};

export const GetUser = async (req: Request, res: Response): Promise<void> => {
  const Allusers = await prisma.user.findMany();
  res.status(200).json(Allusers);
};
