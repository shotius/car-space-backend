import { model, Schema } from 'mongoose';
import { ICustomerReview } from '../../shared_with_front/types/types-shared';

const schema = new Schema<ICustomerReview>({
  review: String,
  photos: [String],
  user: {
    type: 'ObjectId', 
    ref: 'User'
  },
});

schema.set('toJSON', {
  transform: (_document: any, returnedObject: any) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export default model<ICustomerReview>('CustomerReview', schema);

