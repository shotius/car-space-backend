import { isAdmin } from '../utils/midlewares';
import { isAuth } from 'utils/midlewares';
import { newDealerCar } from '../validation/addNewDealerCar';
import dealerController from 'controllers/dealer-cars.controller';
import express from 'express';
import { validate } from 'middlewares/validate';
import { multerMemoryUpload } from 'utils/multer';

export const dealerCarsRouter = express.Router();

dealerCarsRouter.use(express.urlencoded({ extended: true }));

// get all cars and search 
dealerCarsRouter.get('/', dealerController.getDealerCars);
dealerCarsRouter.get('/count', dealerController.getCarCount);


// filters
dealerCarsRouter.get('/brands', dealerController.getBrands);
dealerCarsRouter.get('/models', dealerController.getModels);
dealerCarsRouter.get('/conditions', dealerController.getConditions);
dealerCarsRouter.get('/types', dealerController.getTypes);
dealerCarsRouter.get('/locations', dealerController.getLocations);
dealerCarsRouter.get('/drives', dealerController.getDrives);
dealerCarsRouter.get('/fuels', dealerController.getFuels);
dealerCarsRouter.get('/cylinders', dealerController.getCylinders);
dealerCarsRouter.get('/transmissions', dealerController.getTransmissions);

// get last added cars
dealerCarsRouter.get('/recents', dealerController.getRecentDealerCars);

// get car by id
dealerCarsRouter.get('/:carId', dealerController.getSingleDealerCar);

// add new car
dealerCarsRouter.post(
  '/',
  multerMemoryUpload.array('photo[]', 12),
  validate(newDealerCar),
  dealerController.addDealerCar
);

// delete car
dealerCarsRouter.delete('/', isAuth, isAdmin, dealerController.removeSingleCar);

// remove all cars
// dealerCarsRouter.get('/reset', dealerController.removeAllCars);

export default dealerCarsRouter;
