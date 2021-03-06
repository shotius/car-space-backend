import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import cloudinaryServices from 'services/cloudinary.service';
import service from 'services/dealer-cars.service';
import userService from 'services/user.service';
import { asyncHandler } from 'utils/functions/asyncHandler';
import imageMethods from 'utils/functions/imageTranformsFuncts';
import { error, success } from 'utils/functions/responseApi';
import { parseQueryAsArray } from 'utils/queryParsers/parseQueryAsArray';
import { ApiError } from '../utils/functions/ApiError';
import { extractFilters } from '../utils/functions/extractFilters';
import { parseNewCar } from '../utils/functions/parseNewCar';

// -- Get all cars
const getDealerCars = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 40;

    const filters = extractFilters(req.query);

    const getCars = service.getCarsPaginated({
      page: Number(page),
      limit: Number(limit),
      filters,
    });

    const getPagesTotal = service.getPageCount({
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
    const car = await service.getCarById(req.params.carId);

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
    const cars = await service.getRecentCars();

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
  const carsCount = await service.getAllCars({ filters }).countDocuments();
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
  const addedCar = await service.addCar({ car, blur, imgUrls });

  // if daeler id is provided add car id in dealer document
  if (addedCar.dealerId) {
    await userService.addCarToDealer({
      carId: addedCar._id,
      dealerId: addedCar.dealerId,
    });
  }

  res.send(addedCar);
});

// -- Remove all cars
const removeAllCars = asyncHandler(async (_req: Request, res: Response) => {
  await service.removeAllCars();
  res.send('cars removed');
});

// -- Remove one car
const removeSingleCar = asyncHandler(async (req: Request, res: Response) => {
  try {
    const deletedCar = await service.removeSingleCar(req.body.id);

    // if car had a dealer remove it from dealer list
    if (deletedCar?.dealerId) {
      await userService.removeCarFromDealer({
        carId: deletedCar._id,
        dealerId: deletedCar.dealerId,
      });
    }

    //@to-do refactor responseces
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
  const brands = await service.getAllBrands();
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
    const models = await service.getModels(brands);
    return res.send(models);
  } catch (err) {
    return res
      .status(500)
      .send(error({ message: `Could not get models ${err}` }));
  }
});

const getConditions = asyncHandler(async (_req: Request, res: Response) => {
  try {
    const conditions = await service.getConditions();
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
    const types = await service.getTypes();
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
    const locations = await service.getLocations();
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
    const drives = await service.getDrives();
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
    const fuels = await service.getFuels();
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
    const cylinders = await service.getCylinders();
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
    const transmissions = await service.getTransmissions();
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
