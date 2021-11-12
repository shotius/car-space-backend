import express from 'express';
import carsServices from 'services/carsServices';
import carImagesService from 'services/carImagesService';

const carsRouter = express.Router();

carsRouter.get('/', async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 20;

  const cars = await carsServices.getCars(Number(page), Number(limit));

  return res.send(cars);
});

carsRouter.get('/brands', async (_req, res) => {
  const brands = await carsServices.getAllBrands();
  res.send(brands);
});

carsRouter.get('/models', async (req, res) => {
  const brand = req.query.brand || null;

  if (!brand) {
    return res.status(400).send('bad brand query');
  }
  const models = await carsServices.getModels(String(brand).toUpperCase());
  return res.send(models);
});

carsRouter.get('/images', async (_, res) => {
  const images = await carImagesService.getImages();
  return res.send({ images, count: images.length });
});

carsRouter.get('/images/small', async (req, res) => {
  const query = req.query
  
  const 

  const images = await carImagesService.getImages();
  let links: any = {};
  const smallImages: any = {};

  images.forEach((img) => {
    img.lotImages.forEach((lot, k) => {
      links[k] = lot.link.find((l) => l.isThumbNail === true);
    });

    smallImages[img.objectId] = links;
  });

  return res.send({ smallImages});
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
