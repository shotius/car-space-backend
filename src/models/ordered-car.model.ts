import { ICarOrder } from '../../shared_with_front/types/types-shared';
import { model, Model, Schema } from 'mongoose';

const schema = new Schema(
  {
    carName: String,
    createdAt: Date,
    deliveryAt: Date,
    location: String,
    price: Number,
    status: String,
    userId: String,
  },
  { timestamps: true }
);

schema.set('toJSON', {
  transform: (_document: any, returnedObject: any) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const CarOrder: Model<ICarOrder> = model<ICarOrder>('CarOrder', schema);
export default CarOrder;
