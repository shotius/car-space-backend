import dealerController from 'controllers/cars-dealer.controller';
import express from 'express';
export const dealerCarsRouter = express.Router();

dealerCarsRouter.get('/', dealerController.getDealerCars);
dealerCarsRouter.post('/', dealerController.addDealerCar);

export default dealerCarsRouter;
