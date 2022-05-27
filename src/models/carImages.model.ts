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
  { collection: 'copart_car_images' }
);

export default model<ICarCopartImages>('CopartCarImages', carImagesSchema);
