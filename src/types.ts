import { Types } from 'mongoose';
import { Keys } from '../shared_with_front/types/types-shared';

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
  price_from?: number;
  price_to?: number;
  locations: string[];
  transmissions: string[];
  keys: Keys;
  drives: string[];
  fuels: string[];
  cylinders: string[];
  year_from?: number;
  year_to?: number;
  conditions: string[]
  engine_from?: number;
  engine_to?: number;
}


export interface IUserVerification {
  hash: string; 
  userId: string
}