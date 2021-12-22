import { body } from 'express-validator';

export const loginValidations = [
  body('email')
    .exists()
    .withMessage('email is required')
    .not()
    .isEmpty()
    .withMessage('email is required')
    .trim()
    .toLowerCase()
    .isEmail()
    .withMessage("Invalid email"), 
  body('password')
    .exists()
    .withMessage('password is required')
    .not()
    .isEmpty()
    .withMessage('password is required'),
];
