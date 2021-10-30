import { Schema, model } from 'mongoose';
import { ICarImages } from 'types';

const carImagesSchema = new Schema<ICarImages>(
  {
    objectId: Number,
    imgCount: Number,
    lotImages: [
      {
        sequence: Number,
        link: {
          url: String,
          isThumbNail: Boolean,
          isHdImage: Boolean,
        },
      },
    ],
  },
  { collection: 'carImages' }
);


export default model<ICarImages>('CarImages', carImagesSchema)