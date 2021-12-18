import { model, Schema, Model } from 'mongoose';
import { ICustomerReview } from '../../shared_with_front/types/types-shared';

const schema = new Schema<ICustomerReview>({
  text: String,
  photos: [String],
  user: {
    fullName: String, 
    avatar: String,
  },
});

schema.set('toJSON', {
  transform: (_document: any, returnedObject: any) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const CustomerReview: Model<ICustomerReview> =  model<ICustomerReview>('CustomerReview', schema);
export default CustomerReview
