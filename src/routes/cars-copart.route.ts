import express from 'express';
import { validate } from 'middlewares/validate';
import CopartCars from 'models/car-copart.model';
import carImagesService from 'services/carImages.service';
import service from 'services/copart-cars.services';
import { error } from 'utils/functions/responseApi';
import { validateLotNum } from 'validation/LotNumberValidation';
import { parseQueryAsArray } from '../utils/queryParsers/parseQueryAsArray';
import { extractFilters } from './../utils/functions/extractFilters';

const carsRouter = express.Router();


// get paginating cars
carsRouter.get('/', async (req, res) => {
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
  const [cars, pagesTotal] = await Promise.allSettled([getCars, getPagesTotal]);

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
});

// all distipnc brands
carsRouter.get('/brands', async (_req, res) => {
  const brands = await service.getAllBrands();
  res.send(brands);
});

// all different models of specific brands
carsRouter.get('/models', async (req, res) => {
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

// all different conditions
carsRouter.get('/conditions', async (_req, res) => {
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

// Get all types
carsRouter.get('/types', async (_req, res) => {
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

carsRouter.get('/locations', async (_req, res) => {
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

carsRouter.get('/drives', async (_, res) => {
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

carsRouter.get('/fuels', async (_, res) => {
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

carsRouter.get('/cylinders', async (_, res) => {
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

// sales status
carsRouter.get('/sales_status', async (_, res) => {
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

// returs all distinct transmission types
carsRouter.get('/transmissions', async (_, res) => {
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

/** Returns 15 images */
carsRouter.get('/images', async (_, res) => {
  const images = await carImagesService.getImages();
  return res.send({ images, count: images.length });
});

/**return list of thumbs for given lotnumber */
carsRouter.get('/images/thumbs', validate(validateLotNum), async (req, res) => {
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

/** Returns medium images for a given lotNumber */
carsRouter.get('/images/medium', validate(validateLotNum), async (req, res) => {
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

// route returns single vehicle based on 8 digit lot number
carsRouter.get('/:lotNumber(\\d{8})', async (req, res) => {
  const lotNumber = req.params.lotNumber;
  const car = await service.getCarByLotNumber(lotNumber);
  if (car.length) {
    return res.send(car[0]);
  } else {
    return res.status(404).send('car not found');
  }
});

export default carsRouter;
