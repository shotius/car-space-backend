import { CarServices } from './cars.services';
import httpStatus from 'http-status';
import { ApiError } from 'utils/functions/ApiError';
import { ICarDealer } from '../../shared_with_front/types/types-shared';
import CarDealer from '../models/car-dealer.model';
import cloudinaryServices from './cloudinary.service';

/** Interfaces */
interface AddCarProps {
  car: Omit<ICarDealer, 'imgT' | 'imgUrls' | 'id'>;
  blur: string;
  imgUrls: string[];
}

class DealerCarServices extends CarServices {
  constructor() {
    super(CarDealer);
  }

  getSingleCar = async (carId: string) => {
    return await this.Model.findById(carId);
  };

  addCar = async ({ car, blur, imgUrls }: AddCarProps) => {
    const carObj: Partial<ICarDealer> = car;

    carObj['imgUrls'] = imgUrls;
    carObj['imgT'] = blur;

    const newCar = new this.Model(carObj);

    return await newCar.save();
  };

  removeSingleCar = async (id: string) => {
    const car = await this.Model.findByIdAndDelete(id);
    if (car) {
      const response = await cloudinaryServices.deleteMultiple(car.imgUrls);
      if (response.message === 'Fail' && response.error) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, response.error);
      }
    }
    return car;
  };
}

const dealerCarService = new DealerCarServices();
export default dealerCarService;
