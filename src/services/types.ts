import { IUser } from "types";
import { Document } from "mongoose";

export interface UserErrors {
  param: string;
  msg: string;
}

export interface User {
  role: IUser
  
}

export interface UserResponse {
  errors?: UserErrors[];
  user?: (IUser & Document<any, any, IUser>)
}

export interface LoginParams {
  username: string;
  password: string;
}

export interface ParsedLogin {
  loginParams?: LoginParams;
  errors?: UserErrors[]
}
