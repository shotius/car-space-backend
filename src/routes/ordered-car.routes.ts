import orderedCarController from 'controllers/ordered-car.controller';
import express from 'express';
import { validate } from './../middlewares/validate';
import { newCarProps } from './../validation/newCarProps';
import { userId } from './../validation/userId';

const orderedCarRoute = express.Router();

/** Get all cars */
orderedCarRoute.get('/', orderedCarController.getOrderedCars);

/** Add new car in orderes */
orderedCarRoute.post('/', validate(newCarProps), orderedCarController.addCar);

/** Get ordered by id */
orderedCarRoute.get('/:carId', orderedCarController.getSingleCar);

/** Change ordered by car id */
orderedCarRoute.put('/:carId', orderedCarController.updateCar);

/** Get orders of specific user */
orderedCarRoute.get(
  '/user/:userId',
  validate(userId),
  orderedCarController.getUserOrders
);

/** Delete car from orders */
orderedCarRoute.delete('/:carId', orderedCarController.deleteCar)

export default orderedCarRoute;
