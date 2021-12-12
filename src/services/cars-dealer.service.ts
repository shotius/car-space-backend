import { ICarDealer } from '../../shared_with_front/types/types-shared';
import  CarDealer from '../models/car-dealer.model';

/** Interfaces */
interface AddCarProps {
  car: Omit<ICarDealer, "imgT" | "imgUrls" | "id">;
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
  const carObj: Partial<ICarDealer> = car

  carObj['imgUrls'] = imgUrls
  carObj['imgT'] = blur

  const newCar = new CarDealer(carObj);

  return await newCar.save();
};

/**
 * Function removes car from the db
 * @param id id of the car
 * @returns 
 */
const removeCar = async (id: string) => {
  return await CarDealer.findByIdAndDelete(id)
}
const dealerCarService = {
  removeCar, 
  addCar,
  getAllCars,
};
export default dealerCarService;
