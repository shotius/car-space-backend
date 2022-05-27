import controller from 'controllers/copart-cars.controller';
import express from 'express';
import { validate } from 'middlewares/validate';
import { validateLotNum } from 'validation/LotNumberValidation';

const carsRouter = express.Router();

carsRouter.get('/', controller.getAllCarsPaginated);
carsRouter.get('/brands', controller.getBrands);
carsRouter.get('/models', controller.getModels);
carsRouter.get('/conditions', controller.getConditions);
carsRouter.get('/types', controller.getTypes);
carsRouter.get('/locations', controller.getLocations);
carsRouter.get('/drives', controller.getDrives);
carsRouter.get('/fuels', controller.getFuels);
carsRouter.get('/cylinders', controller.getCylinders);
carsRouter.get('/sales_status', controller.getSalesStatuses);
carsRouter.get('/transmissions', controller.getTransmissions);
carsRouter.get('/images', controller.getImages);
carsRouter.get('/:lotNumber(\\d{8})', controller.getCarByLotNumber);
carsRouter.get(
  '/images/thumbs',
  validate(validateLotNum),
  controller.getThumbs
);
carsRouter.get(
  '/images/medium',
  validate(validateLotNum),
  controller.getMediumImages
);

export default carsRouter;
