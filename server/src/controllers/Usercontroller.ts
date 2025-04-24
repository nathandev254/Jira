import { PrismaClient, User } from "@prisma/client";
import { Response, Request } from "express";

const prisma = new PrismaClient();

export const CreateUser = async (
  req: Request,
  res: Response
): Promise<void> => {

  const data = req.body;
  try {
    const userdata = await prisma.user.create({ data });

    res.status(200).json("user created successfully");
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Failed to create the user" });
  }
};

export const GetUser = async (req: Request, res: Response): Promise<void> => {
  const Allusers = await prisma.user.findMany();
  res.status(200).json(Allusers);
};
