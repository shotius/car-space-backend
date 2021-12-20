import { IUserVerification } from '../types';
import { model, Schema } from 'mongoose';

const schema = new Schema({
  hash: String,
  userId: String
});

const UserVerification = model<IUserVerification>('UserVarification', schema);
export default UserVerification;
