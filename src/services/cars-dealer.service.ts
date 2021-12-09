import { ICarDealer } from '../../shared_with_front/types/types-shared';
import  CarDealer from '../models/car-dealer.model';

/** Interfaces */
interface AddCarProps {
  car: ICarDealer;
  blur: string;
  imgUrls: string[];
}

const getAllCars = async () => {
  return await CarDealer.find({});
};

/**
 *
 * @param param0 {car} car body received from input
 * @param param1 {thumb} blured img
 * @returns true if everything is ok
 */
const addCar = async ({ car, blur, imgUrls }: AddCarProps) => {
  const carObj = car
  carObj['imgUrls'] = imgUrls
  carObj['imgT'] = blur

  const newCar = new CarDealer(carObj);

  await newCar.save();
  return true;
};

const dealerCarService = {
  addCar,
  getAllCars,
};
export default dealerCarService;
