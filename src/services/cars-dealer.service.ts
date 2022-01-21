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

const getAllCars = async () => {
  return await CarDealer.find({});
};

const getSingleCar = async (carId: string) => {
  return await CarDealer.findById(carId);
};

/**
 *
 * @param param0 {car} car body received from input
 * @param param1 {thumb} blured img
 * @returns true if everything is ok
 */
const addCar = async ({ car, blur, imgUrls }: AddCarProps) => {
  const carObj: Partial<ICarDealer> = car;

  carObj['imgUrls'] = imgUrls;
  carObj['imgT'] = blur;

  const newCar = new CarDealer(carObj);

  return await newCar.save();
};

/**
 * Function removes car from the db
 * @param id id of the car
 * @returns
 */
const removeSingleCar = async (id: string) => {
  const car = await CarDealer.findByIdAndDelete(id);
  if (car) {
    const response = await cloudinaryServices.deleteMultiple(car.imgUrls);
    if (response.message === 'Fail' && response.error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, response.error);
    }
  }
  return car;
};
const dealerCarService = {
  removeSingleCar,
  addCar,
  getAllCars,
  getSingleCar,
};
export default dealerCarService;
