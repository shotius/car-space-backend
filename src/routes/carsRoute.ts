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

carsRouter.get('/images/small', async (_, res) => {
  const images = await carImagesService.getImages();
  // let links: any = {};
  const smallImages: any = {};

  // const smallImages = images.reduce((cur, acc) => {
  //   console.log()
  // }, {})

  console.log('images[0].lotImages[0].link', images[0].lotImages[0].link)

  const data = images[0].lotImages[0].link

  console.log(Object.keys(data))
  // const keys: string[] = Object.keys(data)

  console.log(data instanceof Array)

  data.map(d => console.log(d))
  // images.forEach((img) => {
  //   img.lotImages.forEach((lot, k) => {
  //     // console.log('link', lot.link[0])
  //     links[k] = lot.link;
  //   });
  //   smallImages[img.objectId] = links[0];
  // });
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
