import { model, Schema } from 'mongoose';
import { ITransportDataObject } from '../../shared_with_front/types/types-shared';

const schema = new Schema<ITransportDataObject>({
  city: String,
  auction: String,
  price: Number,
  state: String,
  zip: String,
});

schema.set('toJSON', {
  transform: (_document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
  },
});

const Transportation = model<ITransportDataObject>('Transportations', schema);
export default Transportation;
