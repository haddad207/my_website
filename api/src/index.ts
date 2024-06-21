import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRoutes from "./routes/users-routes";
import HttpError from "./models/http-error";
import checkAuth from "./middleware/check-auth";
dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;
var cors = require("cors");

var corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  methods: "POST, GET",
  allowedHeaders:
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
};

app.use(bodyParser.json());

app.use(cors(corsOptions));

app.use("/api/users", userRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(err.code || 500);
  res.json({ message: err.message || "An unkown error occurred!" });
});

mongoose
  .connect(`${process.env.connectionString}`)
  .then(() => {
    app.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });
