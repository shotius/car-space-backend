import orderedCarController from 'controllers/ordered-car.controller';
import express from 'express';

const orderedCarRoute = express.Router();

orderedCarRoute.get('/', orderedCarController.getOrders);

export default orderedCarRoute;
