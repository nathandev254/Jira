import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET  = process.env.SECRET_KEY as string;



declare module "express-serve-static-core" {
  interface Request {
    user?: JwtPayload | string;
  }
}

export const Verifytoken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const Authheader = req.headers["authorization"];
  const Token = Authheader?.split(" ")[1];

  if (!Token) {
    res.status(401).json({ message: "token missing" });
  }

  jwt.verify(Token, SECRET, (err, decode) => {
    if (err) res.status(403).json({ message: "token is invalid" });
    req.user = decode;
  });
  next();
};
