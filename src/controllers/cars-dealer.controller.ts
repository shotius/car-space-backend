import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import CarDealer from 'models/car-dealer.model';
import dealerCarService from 'services/cars-dealer.service';
import carServices from 'services/cars.services';
import cloudinaryServices from 'services/cloudinary.service';
import { asyncHandler } from 'utils/functions/asyncHandler';
import imageMethods from 'utils/functions/imageTranformsFuncts';
import { error, success } from 'utils/functions/responseApi';
import { parseQueryAsArray } from 'utils/queryParsers/parseQueryAsArray';
import { parseNewCar } from '../utils/functions/parseNewCar';
import { ApiError } from './../utils/functions/ApiError';
import { extractFilters } from './../utils/functions/extractFilters';

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

const getRecentDealerCars = asyncHandler(
  async (_req: Request, res: Response, next: NextFunction) => {
    const cars = await carServices.getRecentCars();
    if (!cars) {
      return next(new ApiError(httpStatus.NOT_FOUND, 'Recent cars not found'));
    }

    return res.send(
      success({
        results: cars,
      })
    );
  }
);

/** Get car Count for specific filters */
const getCarCount = asyncHandler(async (req: Request, res: Response) => {
  const filters = extractFilters(req.query);

  const carsCount = await carServices.getAllCars({ filters }).countDocuments();

  res.send(success({ message: 'success', results: carsCount }));
});

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

//** Filters */

const getBrands = asyncHandler(async (_req: Request, res: Response) => {
  const brands = await carServices.getAllBrands();
  res.send(brands);
});

const getModels = asyncHandler(async (req: Request, res: Response) => {
  const brands = parseQueryAsArray(req.query, 'brand').map((b) =>
    b.toUpperCase()
  );

  if (!brands.length) {
    return res.status(400).send('bad brand query');
  }

  try {
    const models = await carServices.getModels(brands);
    return res.send(models);
  } catch (err) {
    return res
      .status(500)
      .send(error({ message: `Could not get models ${err}` }));
  }
});

const getConditions = asyncHandler(async (_req: Request, res: Response) => {
  try {
    const conditions = await carServices.getConditions();

    return res.send(conditions);
  } catch (err) {
    return res.status(500).send(
      error({
        message: 'could not get conditions',
      })
    );
  }
});

const getTypes = asyncHandler(async (_req: Request, res: Response) => {
  try {
    const types = await carServices.getTypes();
    return res.send(types);
  } catch (erro) {
    return res.status(500).send(
      error({
        message: 'could not get types for filter',
      })
    );
  }
});

const getLocations = asyncHandler(async (_req: Request, res: Response) => {
  try {
    const locations = await carServices.getLocation();
    return res.send(locations);
  } catch (err) {
    return res.status(500).send(
      error({
        message: 'could not get car locations',
      })
    );
  }
});

const getDrives = asyncHandler(async (_req: Request, res: Response) => {
  try {
    const drives = await carServices.getDrives();
    return res.send(drives);
  } catch (err) {
    return res.status(500).send(
      error({
        message: 'could not get drives for filter',
      })
    );
  }
});

const getFuels = asyncHandler(async (_req: Request, res: Response) => {
  try {
    const fuels = await carServices.getFuels();
    return res.send(fuels);
  } catch (err) {
    return res.status(500).send(
      error({
        message: 'could not get Fuel types for filter',
      })
    );
  }
});

const getCylinders = asyncHandler(async (_req: Request, res: Response) => {
  try {
    const cylinders = await carServices.getCylinders();
    return res.send(cylinders);
  } catch (err) {
    return res.status(500).send(
      error({
        message: 'could not get Cylinder types for filter',
      })
    );
  }
});

const getTransmissions = asyncHandler(async (_req: Request, res: Response) => {
  try {
    const transmissions = await carServices.getTransmissions();
    return res.send(transmissions);
  } catch (erro) {
    return res.status(500).send(
      error({
        message: 'could not get Transmission types for filter',
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
  getRecentDealerCars,
  getBrands,
  getModels,
  getConditions,
  getTypes,
  getLocations,
  getDrives,
  getFuels,
  getCylinders,
  getTransmissions,
  getCarCount,
};

export default dealerController;
