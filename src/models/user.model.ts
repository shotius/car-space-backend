import { Schema, model, Model } from 'mongoose';
import { IUser } from '../../shared_with_front/types/types-shared';

const userSchema: Schema = new Schema({
  fullName: String,
  email: {
    type: String,
    unique: true,
  },
  passwordHash: String,
  phone: String,
  role: String,
  avatar: String,
  favourites: [
    {
      type: 'ObjectId',
      ref: 'carDealer',
    },
  ],
  orderedCars: [
    {
      type: 'ObjectId',
      ref: 'orderedcars',
    },
  ],
  addedCars: [
    {
      type: 'ObjectId',
      ref: 'carDealer',
    },
  ],
  expiresAt: { type: Date, default: Date.now(), expires: 7200 }, // document will be deleted after 2 hours if not activated
  verified: { type: Boolean, default: false },
  idNumber: Number
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
