import { body } from 'express-validator';

export const loginValidations = [
  body('username')
    .exists()
    .withMessage('username is required')
    .not()
    .isEmpty()
    .withMessage('username is required'),
  body('password')
    .exists()
    .withMessage('password is required')
    .not()
    .isEmpty()
    .withMessage('password is required'),
];
