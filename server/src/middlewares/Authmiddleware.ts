import { Request, Response, NextFunction } from "express";
import jwt, { decode } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET = process.env.SECRET_KEY as string;

export const Verifytoken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Authheader = req.headers["authorization"];
    const Token = Authheader?.split(" ")[1];

    if (Token) {
      jwt.verify(Token, SECRET, (err, decode) => {
        if (err) res.status(403).json({ error: "invalid token" });
        req.user = decode;
        next();
      });
    }
    res.send(Token);
  } catch (error) {
    res.status(500).json({ error: "Authentication failed" });
  }
};
