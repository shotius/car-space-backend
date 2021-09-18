import {Schema, model} from 'mongoose';
import { IUser } from './user';

export interface INote {
  content: string;
  date: Date;
  user: IUser
}

const noteSchema = new Schema({
  content: { type: String, minLength: 5, required: true },
  date: { type: Date, required: true },
  important: Boolean,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

// modify bilt in method "toJSON"
noteSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

// we export model for create documents
const noteModel = model<INote>('Note', noteSchema);
export default noteModel
