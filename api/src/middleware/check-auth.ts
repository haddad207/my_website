import { Request, Response, NextFunction } from "express";
import HttpError from "../models/http-error";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { IGetUserAuthInfoRequest } from "../models/IGetUserAuthInfoRequest";

dotenv.config();

interface JwtPayload {
  userId: string;
  username: string;
  email: string;
}

export default (
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Authorization: 'Bearer TOKEN'
    if (!token) {
      throw new Error("Authentication Failed!");
    }
    const decodedToken = jwt.verify(
      token,
      `${process.env.jwtSecret}`
    ) as JwtPayload;
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (e) {
    const error = new HttpError("Authentication Failed", 401);
    return next(error);
  }
};
