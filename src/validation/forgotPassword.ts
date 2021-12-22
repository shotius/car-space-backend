import { body } from 'express-validator';

export const forgotPassword = [
  body('email')
    .exists()
    .notEmpty()
    .withMessage('Email is required')
    .trim()
    .toLowerCase()
    .isEmail()
    .withMessage('Invalid Email'),
];
