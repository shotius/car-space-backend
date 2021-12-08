import { Types } from 'mongoose';

export interface SessionUser {
  username: string;
  isAuthenticated: boolean;
  role: string;
  id: number;
}

export interface INote {
  content: string;
  date: Date;
  user: Types.ObjectId;
}

interface ImageSequense {
  sequence: number;
  link: {
    url: String;
    isThumbNail: Boolean;
    isHdImage: Boolean;
  }[];
}

export interface ICarCopartImages {
  objectId: number;
  imgCount: number;
  lotImages: ImageSequense[];
}

export interface BaseFilterProps {
  brands: string[];
  models: string[];
  types: string[];
  locations: string[];
  transmissions: string[];
  keys: string;
  drives: string[];
  salesStatuses: string[];
  fuels: string[];
  cylinders: string[];
  year_from?: number;
  year_to?: number;
  conditions: string[]
  engine_from?: number;
  engine_to?: number;
}
