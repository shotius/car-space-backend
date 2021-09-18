import express from 'express'
import carsServices from '../services/carsServices';

const carsRouter = express.Router()

carsRouter.get('/', async  (_req, res) => {
  const cars = await carsServices.getCars()

  return res.send(cars);
})

export default carsRouter
