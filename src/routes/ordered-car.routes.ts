import { newCarProps } from './../validation/newCarProps';
import { validate } from './../middlewares/validate';
import orderedCarController from 'controllers/ordered-car.controller';
import express from 'express';

const orderedCarRoute = express.Router();

orderedCarRoute.get('/', orderedCarController.getOrderedCars);
orderedCarRoute.post('/', validate(newCarProps), orderedCarController.addCar);
orderedCarRoute.get('/:carId', orderedCarController.getSingleCar);
orderedCarRoute.put('/:carId', orderedCarController.updateCar);

export default orderedCarRoute;
