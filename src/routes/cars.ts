import express from 'express'
import carsServices from 'services/carsServices';
// import carsServices from 'src/services/carsServices';
// import carsServices from 'services/carsServices';
// import carsServices from 'src/services/carsServices';
// import carsServices from 'src/services/carsServices';
// import carsServices from '../services/carsServices';

const carsRouter = express.Router()

carsRouter.get('/', async  (req, res) => {
  // const page = req.query.page

  const page = req.query.page || 1

  const cars = await carsServices.getCars(Number(page))

  return res.send(cars);
})

export default carsRouter
