import {Schema, model, Model} from "mongoose";
import { IUser } from "types";

const userSchema = new Schema<IUser>({
  username: {
       type: String,
        unique: true 
    },
  name: String,
  role: String,
  passwordHash: String,
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

const User: Model<IUser> = model<IUser>("User", userSchema);

export default User
