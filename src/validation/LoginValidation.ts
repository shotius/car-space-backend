import { body } from 'express-validator';

export const loginValidations = [
  body('username')
    .exists()
    .not()
    .isEmpty()
    .withMessage('username is required'),
  body('password')
    .exists()
    .exists()
    .not()
    .isEmpty()
    .withMessage('password is required'),
];
