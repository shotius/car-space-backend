import { asyncHandler } from 'utils/functions/asyncHandler';
import { parseQueryAsArray } from '../utils/queryParsers/parseQueryAsArray';
import { error } from 'utils/functions/responseApi';
import service from 'services/copart-cars.services';
import { extractFilters } from './../utils/functions/extractFilters';
import { Request, Response } from 'express';
import carImagesService from 'services/carImages.service';

const getAllCarsPaginated = asyncHandler(
  async (req: Request, res: Response) => {
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
      return res.send({ cars: cars.value, pagesTotal: pagesTotal.value });
    } else {
      return res.status(500).send(
        error({
          message: 'Cound not get cars from',
        })
      );
    }
  }
);

const getBrands = asyncHandler(async (req: Request, res: Response) => {
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

const getConditions = asyncHandler(async (req: Request, res: Response) => {
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

const getTypes = asyncHandler(async (req: Request, res: Response) => {
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

const getLocations = asyncHandler(async (req: Request, res: Response) => {
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

const getDrives = asyncHandler(async (req: Request, res: Response) => {
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

const getFuels = asyncHandler(async (req: Request, res: Response) => {
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

const getCylinders = asyncHandler(async (req: Request, res: Response) => {
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

const getSalesStatuses = asyncHandler(async (req: Request, res: Response) => {
  try {
    const salesStatus = await service.getSalesStatus();
    return res.send(salesStatus);
  } catch (err) {
    return res.status(500).send(
      error({
        message: 'could not get SalesStatus types for filter',
      })
    );
  }
});

const getTransmissions = asyncHandler(async (req: Request, res: Response) => {
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

const getImages = asyncHandler(async (req: Request, res: Response) => {
  const images = await carImagesService.getImages();
  return res.send({ images, count: images.length });
});

const getThumbs = asyncHandler(async (req: Request, res: Response) => {
  const lotNumber = Number(req.query.lotNumber as string);
  try {
    const images = await carImagesService.getThumbs(lotNumber);
    if (images?.length) {
      return res.send(images);
    } else {
      return res.status(404).send(`Thumbs not found for #'${lotNumber}'`);
    }
  } catch (err) {
    return res.status(500).send(
      error({
        message: `Thumbs not found for '${lotNumber}' lot number ${err}`,
      })
    );
  }
});

const getMediumImages = asyncHandler(async (req: Request, res: Response) => {
  const lotNumber = Number(req.query.lotNumber as string);
  try {
    const images = await carImagesService.getMediumImages(lotNumber);
    if (images?.length) {
      return res.send(images);
    } else {
      return res.status(404).send(`Images not found for #'${lotNumber}'`);
    }
  } catch (err) {
    return res.status(404).send(
      error({
        message: `images not found for '${lotNumber}' lot number ${err}`,
      })
    );
  }
});

const getCarByLotNumber = asyncHandler(async (req: Request, res: Response) => {
  const lotNumber = req.params.lotNumber;
  const car = await service.getCarByLotNumber(lotNumber);
  if (car.length) {
    return res.send(car[0]);
  } else {
    return res.status(404).send('car not found');
  }
});

const copartCarController = {
  getCarByLotNumber,
  getMediumImages,
  getThumbs,
  getImages,
  getTransmissions,
  getSalesStatuses,
  getCylinders,
  getFuels,
  getDrives,
  getLocations,
  getAllCarsPaginated,
  getBrands,
  getModels,
  getConditions,
  getTypes,
};

export default copartCarController;
