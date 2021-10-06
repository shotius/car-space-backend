import { Types } from 'mongoose';

export interface SessionUser {
  username: string;
  isAuthenticated: boolean;
  role: string;
  id: number;
}

export interface IUser {
  username: string;
  name: string;
  role: string;
  passwordHash: string;
  notes: Types.ObjectId[] | Record<string, unknown>[];
}

export interface INote {
  content: string;
  date: Date;
  user: Types.ObjectId;
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

interface ImageSequense {
  sequence: number;
  link: {
    url: string;
    isThumbNail: boolean;
    isHdImage: boolean;
  }[]
}

export interface ICarImages {
  objectId: number;
  imgCount: number;
  lotImages: ImageSequense[];
}
