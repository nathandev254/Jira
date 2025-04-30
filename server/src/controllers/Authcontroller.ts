import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const Register = async (req: Request, res: Response): Promise<void> => {
  const { username, firstname, lastname, email, password } = req.body;

  try {
    const Exstinguser = await prisma.user.findUnique({ where: { email } });

    if (Exstinguser) res.status(400).json("user already exists");
    return

    const hashedpassword = await bcrypt.hash(password, 10);

    const userdata = await prisma.user.create({
      data: {
        username,
        firstname,
        lastname,
        email,
        password: hashedpassword,
      },
    });
    res.status(200).json("user created successfully");
    return

  } catch (error) {
    res.status(500).json({ error: "Failed to create the user" });
    return
  }
};
