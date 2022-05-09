import { model, Schema } from 'mongoose';
import { IBanner } from '../../shared_with_front/types/types-shared';

const bannerSchema = new Schema<IBanner>({
  place: Number,
  img: String,
});

bannerSchema.set('toJSON', {
  transform: (_document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
  },
});

export default model<IBanner>('bigBanner', bannerSchema);
