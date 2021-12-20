import { IUserVerification } from '../types';
import { model, Schema } from 'mongoose';

const schema = new Schema({
  hash: String,
  userId: String,
});

export const UserVerification = model<IUserVerification>(
  'UserVerificationHashes',
  schema
);
export default UserVerification;
