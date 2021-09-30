import { Types } from "mongoose";

export interface SessionUser {
  username: string;
  isAuthenticated: boolean;
  role: string;
  id: number;
}


export interface IUser {
  username: string,
  name: string,
  role: string,
  passwordHash: string
  notes: Types.ObjectId[] | Record<string, unknown>[]
}


export interface INote {
  content: string;
  date: Date;
  user: Types.ObjectId
}
