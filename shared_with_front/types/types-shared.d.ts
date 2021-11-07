import { Document } from "mongoose";
import { ValidationError } from "express-validator";


export interface IUser {
  username: string;
  name: string;
  role: string;
  passwordHash: string;
}



export interface LoginParams {
  username: string;
  password: string;
}

export interface MyValidationErrors {
  param: ValidationError['param'];
  msg: ValidationError['msg'];
}


export interface UserResponse {
  errors?: MyValidationErrors[];
  user?: (IUser & Document<any, any, IUser>)
}



export interface ICar{
  lN: string; // Lot number
  m: string; // Make
  vin: string; // VIN
  bSt: string; // Body Style
  dmg: string; // Damage Description
  sDmg: string; // Secondary Damage
  lSt: string; // Location state
  lC: string; // Location country
  od: string; // Odometer
  cyl: string; // Cylinders
  dr: string; // Drive
  eP: string; // Est. Retail Value
  curB: string; // High Bid =non-vix,Sealed=Vix
  hK: string; // Has Keys-Yes or No
  rC: string; // Repair cost
  mG: string; // Model Group
  mD: string; // Model Detail
  eng: string; // Engine
  trans: string; // Transmission
  imgT: string; // Image Thumbnail
  imgU: string; // Image URL
  y: string; // Year
  fuel: string; // Fuel Type
  keys: string; // Has Keys-Yes or No
}
