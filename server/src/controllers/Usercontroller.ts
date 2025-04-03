import { PrismaClient, User } from "@prisma/client";
import { Response, Request } from "express";

const prisma = new PrismaClient();

export const GetUser = (req: Request, res: Response)  => {
  const Allusers = prisma.user.findMany();
  res.json(Allusers);
};
