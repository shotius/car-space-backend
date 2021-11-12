import express from 'express';
import carsServices from 'services/carsServices';
import carImagesService from 'services/carImagesService';
import { error } from 'utils/functions/responseApi';

const carsRouter = express.Router();

// get paginating cars
carsRouter.get('/', async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 20;

  const cars = await carsServices.getCars(Number(page), Number(limit));

  return res.send(cars);
});

// all distipnc brands
carsRouter.get('/brands', async (_req, res) => {
  const brands = await carsServices.getAllBrands();
  res.send(brands);
});

/// all different modles of specifit brand
carsRouter.get('/models', async (req, res) => {
  const brand = req.query.brand || null;

  if (!brand) {
    return res.status(400).send('bad brand query');
  }
  const models = await carsServices.getModels(String(brand).toUpperCase());
  return res.send(models);
});

// all different conditions
carsRouter.get('/conditions', async (_req, res) => {
  try {
    const conditions = await carsServices.getConditions();
    return res.send( conditions );
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
    return res.send( locations );
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
    return res.send( drives );
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
    return res.send( fuels );
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
    return res.send( cylinders );
  } catch (err) {
    return res.status(500).send(
      error({
        message: 'could not get Cylinder types for filter',
      })
    );
  }
});


carsRouter.get('/images', async (_, res) => {
  const images = await carImagesService.getImages();
  return res.send({ images, count: images.length });
});

carsRouter.get('/images/small', async (_req, res) => {
  const images = await carImagesService.getImages();
  let links: any = {};
  const smallImages: any = {};

  images.forEach((img) => {
    img.lotImages.forEach((lot, k) => {
      links[k] = lot.link.find((l) => l.isThumbNail === true);
    });

    smallImages[img.objectId] = links;
  });

  return res.send({ smallImages });
});

carsRouter.get('/:lotNumber', async (req, res) => {
  const lotNumber = req.params.lotNumber;
  const car = await carsServices.getSingleCar(lotNumber);
  if (car.length) {
    return res.send(car[0]);
  } else {
    return res.status(400).send('car not found');
  }
});

export default carsRouter;
