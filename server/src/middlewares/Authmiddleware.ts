import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();
const SECRET = process.env.SECRET_KEY as string;
