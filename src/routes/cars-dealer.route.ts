import { isAdmin } from './../utils/midlewares';
import { isAuth } from 'utils/midlewares';
import { addNewDealerCar } from './../validation/addNewDealerCar';
import dealerController from 'controllers/cars-dealer.controller';
import express from 'express';
import { validate } from 'middlewares/validate';
import { multerMemoryUpload } from 'utils/multer';

export const dealerCarsRouter = express.Router();

dealerCarsRouter.use(express.urlencoded({ extended: true }));

dealerCarsRouter.get('/', dealerController.getDealerCars);
dealerCarsRouter.post(
  '/',
  multerMemoryUpload.array('photo[]'),
  validate(addNewDealerCar),
  dealerController.addDealerCar
);
dealerCarsRouter.delete('/', isAuth, isAdmin, dealerController.removeCar);
dealerCarsRouter.get('/reset', dealerController.removeAllCars);

export default dealerCarsRouter;
