import { body } from 'express-validator';

export const newDealerCar = [
  body('manufacturer')
    .exists()
    .withMessage('Manufacturer is missing')
    .not()
    .isEmpty()
    .withMessage('Manufacturer is missing')
    .isString()
    .withMessage('Manufacturer must be text')
    .trim(),
  body('dealerName')
    .exists()
    .not()
    .isEmpty()
    .withMessage('Dealer name required')
    .toUpperCase()
    .trim(),
];
