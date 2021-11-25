import express from 'express';
import { validate } from 'middlewares/validate';
import carImagesService from 'services/carImages.service';
import carsServices from 'services/cars.services';
import { error } from 'utils/functions/responseApi';
import { validateLotNum } from 'validation/LotNumberValidation';
import { parseQueryAsNumber } from '../utils/queryParsers/parseQueryAsNumber';
import { parseQueryAsArray } from '../utils/queryParsers/parseQueryAsArray';

const carsRouter = express.Router();

// get paginating cars
carsRouter.get('/', async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 40;

  const brands = parseQueryAsArray(req.query, 'brand');
  const models = parseQueryAsArray(req.query, 'model');

  const year_from = parseQueryAsNumber(req.query, 'year_from');
  const year_to = parseQueryAsNumber(req.query, 'year_to');

  const getCars = carsServices.getCarsPaginated({
    page: Number(page),
    limit: Number(limit),
    brands: brands,
    models: models,
    year_from,
    year_to,
  });

  const getPagesTotal = carsServices.getPageCount({
    brands,
    limit: Number(limit),
    models,
    year_from,
    year_to,
  });

  const [cars, pagesTotal] = await Promise.allSettled([getCars, getPagesTotal]);

  if (cars.status === 'fulfilled' && pagesTotal.status === 'fulfilled') {
    return res.send({ cars: cars.value, pagesTotal: pagesTotal.value });
  }
  return null;
});

// all distipnc brands
carsRouter.get('/brands', async (_req, res) => {
  const brands = await carsServices.getAllBrands();
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

  const models = await carsServices.getModels(brands);
  return res.send(models);
});

// all different conditions
carsRouter.get('/conditions', async (_req, res) => {
  try {
    const conditions = await carsServices.getConditions();
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
    const types = await carsServices.getTypes();
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
    const locations = await carsServices.getLocation();
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
    const drives = await carsServices.getDrives();
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
    const fuels = await carsServices.getFuels();
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
    const cylinders = await carsServices.getCylinders();
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
    const salesStatus = await carsServices.getSalesStatus();
    return res.send(salesStatus);
  } catch (err) {
    return res.status(500).send(
      error({
        message: 'could not get SalesStatus types for filter',
      })
    );
  }
});

carsRouter.get('/images', async (_, res) => {
  const images = await carImagesService.getImages();
  return res.send({ images, count: images.length });
});

carsRouter.get('/images/thumb', async (_req, res) => {
  const images = await carImagesService.getImages();
  let links: any = {};
  const thumbImages: any = {};

  images.forEach((img) => {
    img.lotImages.forEach((lot, k) => {
      links[k] = lot.link.find((l) => l.isThumbNail === true);
    });

    thumbImages[img.objectId] = links;
  });

  return res.send({ smallImages: thumbImages });
});

carsRouter.get('/images/medium', validate(validateLotNum), async (req, res) => {
  const lotNumber = Number(req.query.lotNumber as string);

  const images = await carImagesService.getMediumImages(lotNumber);
  if (images) {
    return res.send(images);
  } else {
    return res.status(400).send(
      error({
        message: `images not found for '${lotNumber}' lot number`,
      })
    );
  }
});

// route returns single vehicle based on 8 digit lot number
carsRouter.get('/:lotNumber(\\d{8})', async (req, res) => {
  const lotNumber = req.params.lotNumber;
  console.log('here');
  const car = await carsServices.getSingleCar(lotNumber);
  if (car.length) {
    return res.send(car[0]);
  } else {
    return res.status(400).send('car not found');
  }
});

export default carsRouter;
