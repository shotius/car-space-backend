import { param } from 'express-validator';

export const userId = [
  param('userId')
    .isString()
    .withMessage('Invalid userId id')
    .isLength({ min: 24, max: 24 })
    .withMessage('Invalid length of user id'),
];
