import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import CarDealer from 'models/car-dealer.model';
import dealerCarService from 'services/cars-dealer.service';
import carServices from 'services/cars.services';
import cloudinaryServices from 'services/cloudinary.service';
import { asyncHandler } from 'utils/functions/asyncHandler';
import imageMethods from 'utils/functions/imageTranformsFuncts';
// import { success } from 'utils/functions/responseApi';
import { error, success } from 'utils/functions/responseApi';
import { parseNewCar } from '../utils/functions/parseNewCar';
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

const getSingleDealerCar = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const car = await dealerCarService.getSingleCar(req.params.carId);
    if (!car) {
      return next(
        new ApiError(
          httpStatus.NOT_FOUND,
          `Car, you are searching for,  not found...`
        )
      );
    }
    return res.send(
      success({
        results: car,
      })
    );
  }
);

// -- Add car to the db
const addDealerCar = asyncHandler(async (req: Request, res: Response) => {
  const files = req.files;
  const car = parseNewCar(req.body);
  let imgUrls: string[] = [];

  // upload images to the cloudinary and get urls
  if (Array.isArray(files) && files.length) {
    imgUrls = await cloudinaryServices.uploadMultyStream(
      files,
      'cars/medium-sized-cars'
    );
  }

  const blur = imageMethods.toBlur(imgUrls[0] || '');
  const addedCar = await dealerCarService.addCar({ car, blur, imgUrls });

  res.send(addedCar);
});

// -- Remove all cars
const removeAllCars = asyncHandler(async (_req: Request, res: Response) => {
  await CarDealer.deleteMany({});
  res.send('cars removed');
});

// -- Remove one car
const removeSingleCar = asyncHandler(async (req: Request, res: Response) => {
  try {
    await dealerCarService.removeSingleCar(req.body.id);
    return res.send(
      success({
        results: 'Ok',
      })
    );
  } catch (err) {
    return res.send(
      error({
        message: 'Could not delete car' + req.body.id,
      })
    );
  }
});

// -- Exports
const dealerController = {
  removeSingleCar,
  getDealerCars,
  addDealerCar,
  removeAllCars,
  getSingleDealerCar,
};
export default dealerController;
