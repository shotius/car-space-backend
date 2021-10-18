import express from 'express';
import carsServices from 'services/carsServices';
// import carsServices from 'src/services/carsServices';
// import carsServices from 'services/carsServices';
// import carsServices from 'src/services/carsServices';
// import carsServices from 'src/services/carsServices';
// import carsServices from '../services/carsServices';

const carsRouter = express.Router();

carsRouter.get('/', async (req, res) => {
  const page = req.query.page || 1;

  const cars = await carsServices.getCars(Number(page));

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
  return res.send(models)
});

export default carsRouter;
