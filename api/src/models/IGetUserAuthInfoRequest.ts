import { Request } from "express";
export interface IGetUserAuthInfoRequest extends Request {
  userData: { userId: string };
}
