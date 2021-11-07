import { IUser } from "types";
import { Document } from "mongoose";
import { ValidationError } from "express-validator";

export interface MyValidationErrors {
  param: ValidationError['param'];
  msg: ValidationError['msg'];
}

export interface User {
  role: IUser
  
}

export interface UserResponse {
  errors?: MyValidationErrors[];
  user?: (IUser & Document<any, any, IUser>)
}

export interface LoginParams {
  username: string;
  password: string;
}

export interface ParsedLogin {
  loginParams?: LoginParams;
  errors?: MyValidationErrors[]
}
