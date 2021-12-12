import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import CarDealer from 'models/car-dealer.model';
import dealerCarService from 'services/cars-dealer.service';
import carServices from 'services/cars.services';
import { asyncHandler } from 'utils/functions/asyncHandler';
// import { success } from 'utils/functions/responseApi';
import { toBlur, toWebp } from 'utils/functions/imageTranformsFuncts';
import { error, success } from 'utils/functions/responseApi';
import { parseNewCar } from '../utils/functions/parseNewCar';
import { uploadStreamCloudinary } from './../utils/cloudinary/cloudinary';
import { ApiError } from './../utils/functions/ApiError';
import { extractFilters } from './../utils/functions/extractFilters';
// import dealerCarService from '../services/cars-dealer.service';

// -- Get all cars
const getDealerCars = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 40;

    const filters = extractFilters(req.query);

    const getCars = carServices.getCarsPaginated({
      page: Number(page),
      limit: Number(limit),
      filters,
    });

    const getPagesTotal = carServices.getPageCount({
      limit: Number(limit),
      filters,
    });

    // Get cars and pages in parallel
    const [cars, pagesTotal] = await Promise.allSettled([
      getCars,
      getPagesTotal,
    ]);

    // if both requests fullfiled response success
    if (cars.status === 'fulfilled' && pagesTotal.status === 'fulfilled') {
      return res.send(
        success({
          results: { cars: cars.value, pagesTotal: pagesTotal.value },
        })
      );
    } else {
      return next(
        new ApiError(
          httpStatus.INTERNAL_SERVER_ERROR,
          'Cound not get cars from'
        )
      );
    }
  }
);

// -- Add car to the db
const addDealerCar = asyncHandler(async (req: Request, res: Response) => {
  const files = req.files;
  const car = parseNewCar(req.body);
  let imgUrls: string[] = [];

  // upload images to the cloudinary and get urls
  if (Array.isArray(files) && files.length) {
    const requests = files.map(async (file) => {
      const { buffer } = file;
      const convertedBuffer = await toWebp(buffer);
      return uploadStreamCloudinary(convertedBuffer, 'cars/medium-sized-cars');
    });
    const cloudResponses = await Promise.allSettled(requests);
    imgUrls = cloudResponses.map((res) => {
      if (res.status === 'fulfilled') {
        return res.value.url || '';
      } else {
        return '';
      }
    });
  }

  const blur = toBlur(imgUrls[0] || '');
  const addedCar = await dealerCarService.addCar({ car, blur, imgUrls });

  res.send(addedCar);
});

// -- Remove all cars
const removeAllCars = asyncHandler(async (_req: Request, res: Response) => {
  await CarDealer.deleteMany({});
  res.send('cars removed');
});

// -- Remove one car
const removeCar = asyncHandler(async (req: Request, res: Response) => {
  const result = await dealerCarService.removeCar(req.body.id);
  if (result) {
    return res.send(
      success({
        message: 'Ok',
        results: '',
      })
    );
  }
  return res.send(
    error({
      message: 'Could not delete car' + req.body.id,
    })
  );
});

// -- Exports
const dealerController = {
  removeCar,
  getDealerCars,
  addDealerCar,
  removeAllCars,
};
export default dealerController;
