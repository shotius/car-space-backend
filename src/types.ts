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
  link: Array<any>;
}

export interface ICarImages {
  objectId: number;
  imgCount: number;
  lotImages: ImageSequense[];
}
