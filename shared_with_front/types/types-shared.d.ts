import { Document, Types } from 'mongoose';

import { ValidationError } from 'express-validator';
import { Roles } from '../contants';

/** General reponse */
export interface ApiBaseResponse {
  success: boolean;
  message?: string;
  status?: number;
}

export interface ApiValidationError extends ApiBaseResponse {
  errors: MyValidationErrors[];
}

export interface ApiSuccessResponse<Type> extends ApiBaseResponse {
  results: Type
}

export interface ApiDefaultError extends ApiBaseResponse {
  error: string | null;
}

/** IUser */
export type RoleTypes = Roles.ADMIN | Roles.DEALER | Roles.USER;

export interface IUser {
  username: string;
  name: string;
  role: RoleTypes;
  passwordHash: string;
  avatar: string;
  favourites: Types.ObjectId[];
}

export interface SessionUser {
  username: string;
  isAuthenticated: boolean;
  role: RoleTypes;
  id: number;
  avatar: string;
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

// Car Copart 
export interface ICarCopart {
  id: string;
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
  eng: string; // 
  mD: string; // Model Detail
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
  bin: string; // Buy it now
  imgsM?: string[]; // medium images
}

// Car for dealers
export interface ICarDealer {
  id: string; 
  m?: string; // Manufacturer
  bSt?: string; // Body Style
  dmg?: string; // Damage Description
  lC?: string; // Location country
  od: number; // Odometer
  cyl: number; // Cylinders
  dr?: string; // Drive
  mG?: string; // Model Group
  mD?: string; // Model Detail
  eng: number; // Engine
  trans?: Transmission; // Transmission
  imgT: string; // Image Thumbnail
  imgUrls: string[]; // Image URL
  y: number; // Year
  fuel?: string; // Fuel Type
  keys?: Keys; // Has Keys-Yes or No
  c?: string; // Color
  price: number; // Price
  desc?: string;
}

// response from cloudinary
interface CloudinaryResponse {
  message: 'Success' | 'Fail';
  error?: string;
  url?: string;
}

/**Filters */
export interface SelectedCarModel {
  brand: string;
  models: string[];
}

//** Add new car body */

export type Transmission =
  | TransmissionEnum.MANUAL
  | TransmissionEnum.AUTOMATIC
  | TransmissionEnum.CVT;

export type Keys = KeysEnum.YES | KeysEnum.NO;

export interface AddCarValues {
  manufacturer: string;
  modelGroup: string;
  modelDetail: string;
  bodyStyle: string;
  damage: string;
  location: string;
  odometer: number;
  cylinders: number;
  drive: string;
  engine: number;
  transmission: Transmission | '';
  year: string;
  hasKeys: Keys | '';
  fuelType: string;
  color: string;
  price: number;
  description: string;
  photos: FileList | null;
}
