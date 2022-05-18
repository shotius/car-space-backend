import { Router } from 'express';
import authRouter from './auth.routes';
import bannerRouter from './big-banner.routes';
import carsRouter from './cars-copart.routes';
import dealerCarsRouter from './cars-dealer.routes';
import customerReviewRouter from './customer-review.routes';
import orderedCarRoute from './ordered-car.routes';
import verificationRouter from './user-verification.routes';
import usersRouter from './users.routes';

const baseRouter = Router();

baseRouter.use('/status', (_req, res) => res.send('ok'));
baseRouter.use('/users', usersRouter);
baseRouter.use('/copart/cars', carsRouter);
baseRouter.use('/dealers/cars', dealerCarsRouter);
baseRouter.use('/auth', authRouter);
baseRouter.use('/customer-reviews', customerReviewRouter);
baseRouter.use('/ordered-cars/', orderedCarRoute);
baseRouter.use('/user-verification/', verificationRouter);
baseRouter.use('/banners', bannerRouter);

export default baseRouter;
