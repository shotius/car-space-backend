import { Schema, model, Model } from 'mongoose';
import { IUser } from '../../shared_with_front/types/types-shared';

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    unique: true,
  },
  name: String,
  role: String,
  passwordHash: String,
  favourites: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Car',
    },
  ],
});

userSchema.set('toJSON', {
  transform: (_document: any, returnedObject: any) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash;
  },
});

const User: Model<IUser> = model<IUser>('User', userSchema);

export default User;
