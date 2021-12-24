import httpStatus from 'http-status';
import OrderedCar from 'models/ordered-car.model';
import User from 'models/user.model';
import { IOrderedCar } from '../../shared_with_front/types/types-shared';
import { ApiError } from './../utils/functions/ApiError';
import { INewOrderCar } from './types';

const getOrderCars = async () => {
  return await OrderedCar.find({});
};

const getOrderedCar = async (id: string) => {
  return await OrderedCar.findById(id);
};

/**
 * Function adds new car
 * @param  {INewOrderCar} props
 * @returns saved car
 */
const addCar = async (props: INewOrderCar) => {
  const { userId, ...rest } = props;
  const carobj = new OrderedCar(rest);
  const savedCar = await carobj.save();

  // Find and save car in to user document
  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Provided user not found');
  }

  user.orderedCars.push(savedCar._id);
  await user.save();

  return savedCar;
};

const updateCar = async (props: IOrderedCar) => {
  return await OrderedCar.findByIdAndUpdate(props.id, props, { new: true });
};

const orderedCarService = {
  getOrderCars,
  getOrderedCar,
  addCar,
  updateCar,
};
export default orderedCarService;
