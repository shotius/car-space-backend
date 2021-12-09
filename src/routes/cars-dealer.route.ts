import { multerMemoryUpload } from './../utils/multer';
import dealerController from 'controllers/cars-dealer.controller';
import express from 'express';

export const dealerCarsRouter = express.Router();

dealerCarsRouter.use(express.urlencoded({extended: true}))

dealerCarsRouter.get('/', dealerController.getDealerCars);
dealerCarsRouter.post('/', multerMemoryUpload.array('image') , dealerController.addDealerCar);
dealerCarsRouter.get('/reset', dealerController.removeAllCars)

export default dealerCarsRouter;
