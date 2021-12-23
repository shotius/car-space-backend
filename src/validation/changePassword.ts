import { body } from 'express-validator';

export const newPassword = [
  body('token')
    .exists()
    .notEmpty()
    .withMessage('token is not provided')
    .isLength({ min: 24, max: 24 })
    .withMessage('Invalid token'),
  body('password')
    .exists()
    .notEmpty()
    .withMessage('Password is Required')
    .isLength({ min: 4 })
    .withMessage('Password must be more then 4 characters'),
];
