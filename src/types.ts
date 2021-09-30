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

export interface ICar {
  lotNum: string,
  make: string,
  vin: string,
  bodyStyle: string,
  secondaryDmg: string,
  locState: string,
  hasKey: string,
  repairCost: string,
  modelGroup: string,
  modelDetail: string,
  engine: string,
  damageDesc: string,
  transmision: string,
  imgThumb: string,
  imgUrl: string,
}