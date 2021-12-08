import { Schema, model } from 'mongoose';
import { ICarCopartImages } from 'types';

const carImagesSchema = new Schema<ICarCopartImages>(
  {
    objectId: Number,
    imgCount: Number,
    lotImages: [
      {
        sequence: Number,
        link: [
          {
            url: String,
            isThumbNail: Boolean,
            isHdImage: Boolean,
          },
        ],
      },
    ],
  },
  { collection: 'carImages' }
);

export default model<ICarCopartImages>('CarImages', carImagesSchema);
