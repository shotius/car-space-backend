import { RoleTypes, RegisterParams } from './types-shared.d';
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
  results: Type;
}

export interface ApiDefaultError extends ApiBaseResponse {
  error: string | null;
}

/** IUser */
export type RoleTypes = Roles.ADMIN | Roles.DEALER | Roles.USER;

export interface IUser {
  id: string;
  fullName: string;
  email: string;
  passwordHash: string;
  phone: string;
  role: RoleTypes;
  avatar: string;
  favourites: Types.ObjectId[];
  orderedCars: Types.ObjectId[];
  verified: boolean;
  addedCars: Types.ObjectId[];
}

export interface SessionUser {
  id: number;
  fN: string; // full name
  r: RoleTypes; //role
}

export interface LoginParams {
  email: string;
  password: string;
}

export interface IUserInfo {
  id: string;
  role: RoleTypes;
  isAuthenticated: boolean;
  fullName: string;
  phone: string;
  avatar: string;
  email: string;
}


export interface RegisterParams {
  fullName: string;
  email: string;
  password: string;
  phoneNum: string;
  role: RoleTypes;
}

export type RegisterResponse = {
  email: string;
  fullName: string;
};

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

export type Keys = HasKeys.YES | HasKeys.NO;

// Car for dealers
export interface ICarDealer {
  id: string;
  m?: string; // Manufacturer
  bSt?: string; // Body Style
  dmg?: string; // Damage Description
  lC?: string; // Location country
  desc?: string;
  dr?: string; // Drive
  mG?: string; // Model Group
  mD?: string; // Model Detail
  trans?: Transmission; // Transmission
  imgT: string; // Image Thumbnail
  imgUrls: string[]; // Image URL
  fuel?: string; // Fuel Type
  keys?: Keys; // Has Keys-Yes or No
  c?: string; // Color
  eng: number; // Engine
  y: number; // Year
  od: number; // Odometer
  cyl: number; // Cylinders
  price: number; // Price
  mostDemand: boolean;
  dealername: string;
  dealerId?: string;
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
  keys: Keys | '';
  fuelType: string;
  color: string;
  price: number;
  description: string;
  photos: FileList | null;
  mostDemand: boolean;
  dealerName: string;
  dealerId?: string;
}

export interface ICustomerReview {
  user: {
    fullName: string;
    avatar?: string;
  };
  review: string;
  photos: string[];
}

export interface INewReview {
  text: string;
  images: string[];
  userId: string;
}

export interface ICustomerReviewFront {
  id: string;
  text: string;
  photos: string[];
  user: IUser;
}

export interface MeResponse {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  role: RoleTypes;
  avatar: string;
}

/** Ordered cars */
export interface IOrderCarBase {
  carName: string;
  createdAt?: Date;
  deliveryAt?: Date;
  location: string;
  price: number;
  status: string;
}

export interface IOrderedCar extends IOrderCarBase {
  id: string;
}

export interface INewOrderCar extends IOrderCarBase {
  userId: string;
}

//** Message */
export interface IMessageBody {
  name: string;
  phone: string;
  message: string;
  link: string;
}

//**Banner */
interface IBanner {
  id: string;
  img: string;
  place: number;
}
