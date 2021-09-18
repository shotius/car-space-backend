import {Schema, model} from "mongoose";
import { INote } from "./note";

export interface IUser {
  username: string,
  name: string,
  role: string,
  passwordHash: string
  notes: INote[]
}

const userSchema = new Schema<IUser>({
  username: {
       type: String,
        unique: true 
    },
  name: String,
  role: String,
  passwordHash: String,
  notes: [
    {
      type: Schema.Types.ObjectId,
    ref: 'Note',
    }
  ]
});

userSchema.set("toJSON", {
  transform: (_document: any, returnedObject: any) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash;
  },
});

export default model<IUser>("User", userSchema);
