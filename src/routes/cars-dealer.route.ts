import { isAdmin } from './../utils/midlewares';
import { isAuth } from 'utils/midlewares';
import { newDealerCar } from './../validation/addNewDealerCar';
import dealerController from 'controllers/cars-dealer.controller';
import express from 'express';
import { validate } from 'middlewares/validate';
import { multerMemoryUpload } from 'utils/multer';

export const dealerCarsRouter = express.Router();

dealerCarsRouter.use(express.urlencoded({ extended: true }));

dealerCarsRouter.get('/', dealerController.getDealerCars);
dealerCarsRouter.get('/brands', dealerController.getBrands);
dealerCarsRouter.get('/models', dealerController.getModels);
dealerCarsRouter.get('/conditions', dealerController.getConditions);
dealerCarsRouter.get('/types', dealerController.getTypes);
dealerCarsRouter.get('/locations', dealerController.getLocations);
dealerCarsRouter.get('/drives', dealerController.getDrives);
dealerCarsRouter.get('/fuels', dealerController.getFuels);
dealerCarsRouter.get('/cylinders', dealerController.getCylinders);
dealerCarsRouter.get('/transmissions', dealerController.getTransmissions);

dealerCarsRouter.get('/recents', dealerController.getRecentDealerCars);
dealerCarsRouter.get('/:carId', dealerController.getSingleDealerCar);

dealerCarsRouter.post(
  '/',
  multerMemoryUpload.array('photo[]', 12),
  validate(newDealerCar),
  dealerController.addDealerCar
);

dealerCarsRouter.delete('/', isAuth, isAdmin, dealerController.removeSingleCar);
dealerCarsRouter.get('/reset', dealerController.removeAllCars);

export default dealerCarsRouter;
