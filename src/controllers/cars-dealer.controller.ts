import { Request, Response } from 'express';
import { asyncHandler } from 'utils/functions/asyncHandler';
import { success } from 'utils/functions/responseApi';
import dealerCarService from '../services/cars-dealer.service';

// -- Get all cars
const getDealerCars = asyncHandler(async (_req: Request, res: Response) => {
  const cars = await dealerCarService.getAllCars();
  res.send(
    success({
      results: cars,
    })
  );
});

// -- Add car to the db
const addDealerCar = asyncHandler(async (req: Request, res: Response) => {
  console.log(req.body);
  const car = req.body;
  await dealerCarService.addCar(car);
  res.send('saved dealer car');
});

// -- Exports
const dealerController = {
  getDealerCars,
  addDealerCar,
};
export default dealerController;
