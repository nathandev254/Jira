import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { RegisterInput, LoginInput } from "../schemas/authSchemas";

const prisma = new PrismaClient();
dotenv.config();
const SECRET = process.env.SECRET_KEY as string;

export const Register = async (req: Request<{}, {}, RegisterInput>, res: Response): Promise<void> => {
  const { username, firstname, lastname, email, password } = req.body;

  try {
    const Exstinguser = await prisma.user.findUnique({ where: { email } });

    if (Exstinguser) {
     res.status(400).json({ message: "User already exists" });
     return;
    }

    const hashedpassword = await bcrypt.hash(password, 10);

    const userdata = await prisma.user.create({
      data: {
        username: username || undefined,
        firstname: firstname || undefined,
        lastname: lastname || undefined,
        email,
        password: hashedpassword,
      },
    });
    res.status(201).json({ message: "User created successfully", userdata });
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create the user" });
    return;
  }
};

export const Login = async (req: Request<{}, {}, LoginInput>, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        username: user.username,
      },
      SECRET
    );

    res.status(200).json({ message: "User logged in successfully", token });
  } catch (error) {
    res.status(500).json({ message: "Failed to login" });
  }
};
