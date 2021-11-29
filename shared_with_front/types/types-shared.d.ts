import { Document, Types, Schema } from 'mongoose';

import { ValidationError } from 'express-validator';

/** General reponse */
type StatusCode = 200 | 201 | 400 | 401 | 404 | 403 | 422 | 500;

export interface ApiResponse {
  success: boolean;
  message?: string;
  results?: any;
  code?: StatusCode;
  errors?: MyValidationErrors[];
}

/** IUser */
export interface IUser {
  username: string;
  name: string;
  role: string;
  passwordHash: string;
  favourites: string[];
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
  user?: IUser & Document<any, any, IUser>;
}

export interface ICar {
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
  curB: string; // High Bid =non-vix,Sealed=Vix
  mG: string; // Model Group
  mD: string; // Model Detail
  eng: string; // Engine
  trans: string; // Transmission
  imgT: string; // Image Thumbnail
  imgU: string; // Image URL
  y: string; // Year
  fuel: string; // Fuel Type
  keys: string; // Has Keys-Yes or No
  sS: string; // Sales Status
  eRV: string; // Est. Retail Value
  rC: string; // Repair Cost
  c: string; // Color
  rd: string; // Runs and drive
  bin: string // Buy it now
}

/**Filters */

export interface SelectedCarModel {
  brand: string;
  models: string[];
}
