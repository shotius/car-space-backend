import { model, Schema } from 'mongoose';
import { IBlog } from '../../shared_with_front/types/types-shared';

const blogSchema = new Schema<IBlog>(
  {
    header: String,
    body: String,
    img: String,
  },
  { timestamps: true }
);

blogSchema.set('toJSON', {
  transform: (_document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
  },
});

export default model<IBlog>('Blogs', blogSchema);
