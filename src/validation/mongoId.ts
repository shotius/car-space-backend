import { param } from 'express-validator';

export const mongoId = [
  param('reviewId')
    .isString()
    .withMessage('Invalid review id')
    .isLength({ min: 24, max: 24 })
    .withMessage('Invalid length of review id'),
];
