import User from "../models/user";
import HttpError from "../models/http-error";
import { Request, Response, NextFunction } from "express";
import * as validator from "express-validator";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { UserJwtPayload } from "../models/UserJwtPayload";

dotenv.config();

const signup = async (req: Request, res: Response, next: NextFunction) => {
  const errors = validator.validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors);
    const error = new HttpError(
      "Invalid inputs passed, please check your data",
      422
    );
    return next(error);
  }
  const { name, email, password, username } = req.body;

  let exisitingUser;
  let exisitingEmail;
  try {
    exisitingUser = await User.findOne({ username: username });
    exisitingEmail = await User.findOne({ email: email });
  } catch (e) {
    const error = new HttpError(
      "Signing up failed. Please try again later",
      500
    );
    return next(error);
  }

  if (exisitingEmail && exisitingUser) {
    const error = new HttpError(
      "Email and User already taken, try logging in instead",
      422
    );
    next(error);
  }

  if (exisitingEmail) {
    const error = new HttpError(
      "Email already exists, please try logging in or use a different one",
      422
    );
    return next(error);
  }

  if (exisitingUser) {
    const error = new HttpError(
      "User already exists. Please login instead",
      422
    );
    return next(error);
  }

  let hashedPassword;
  try {
    hashedPassword = await bcryptjs.hash(password, 12);
  } catch (e) {
    const error = new HttpError(
      "Could not create user, please try again.",
      500
    );
    return next(error);
  }

  const createdUser = new User({
    name,
    email,
    password: hashedPassword,
    darkMode: false,
    username,
  });

  try {
    await createdUser.save();
  } catch (e) {
    const error = new HttpError(
      "Signing up failed, please try again later",
      500
    );
    return next(error);
  }

  let token;
  try {
    console.log(`${process.env.jwtSecret}`);
    token = jwt.sign(
      { userId: createdUser.id, username: createdUser.username },
      `${process.env.jwtSecret}`,
      { expiresIn: "7d" }
    );
  } catch (e) {
    const error = new HttpError(
      "Signing up failed, please try again later",
      500
    );
    return next(error);
  }
  res.status(201).json({
    userId: createdUser.id,
    username: createdUser.username,
    name: createdUser.name,
    email: createdUser.email,
    token: token,
  });
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  let exisitingUser;
  try {
    exisitingUser = await User.findOne({ username: username });
  } catch (e) {
    const error = new HttpError(
      "Logging in failed. Please try again later",
      500
    );
    return next(error);
  }

  if (!exisitingUser) {
    const error = new HttpError(
      "Invalid Credentials, could not log you in",
      401
    );
    return next(error);
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcryptjs.compare(password, exisitingUser.password);
  } catch (e) {
    const error = new HttpError(
      "Could not log you in, please check your credentials and try again.",
      500
    );
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError(
      "Invalid Credentials, could not log you in",
      401
    );
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: exisitingUser.id, username: exisitingUser.username },
      `${process.env.jwtSecret}`,
      { expiresIn: "7d" }
    );
  } catch (e) {
    const error = new HttpError(
      "Logging in failed, please try again later",
      500
    );
    return next(error);
  }

  res.json({
    userId: exisitingUser.id,
    username: exisitingUser.username,
    name: exisitingUser.name,
    email: exisitingUser.email,
    token: token,
  });
};

const getCurrentUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let userId;
  let currentUser;

  try {
    const token = req.headers.authorization?.split(" ")[1]; // Authorization: 'Bearer TOKEN'
    if (!token) {
      throw new Error("Authentication Failed!");
    }
    const decodedToken = jwt.verify(
      token,
      `${process.env.jwtSecret}`
    ) as UserJwtPayload;

    userId = decodedToken.userId;
  } catch (e) {
    const error = new HttpError("Authentication Failed", 401);
    return next(error);
  }

  try {
    currentUser = await User.findById(userId);
    console.log(currentUser);
  } catch (e) {
    console.log(e);
    const error = new HttpError(
      "Fetching currentUser Failed. Please try again later.",
      500
    );
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: currentUser!.id, username: currentUser!.username },
      `${process.env.jwtSecret}`,
      { expiresIn: "7d" }
    );
  } catch (e) {
    const error = new HttpError(
      "Logging in failed, please try again later",
      500
    );
    return next(error);
  }

  res.json({
    userId: currentUser!.id,
    username: currentUser!.username,
    name: currentUser!.name,
    email: currentUser!.email,
    token: token,
  });
};

const userController = {
  signup,
  login,
  getCurrentUser,
};

export default userController;
