import { body } from 'express-validator';

export const newCarProps = [
  body('userId')
    .exists()
    .notEmpty()
    .withMessage('User id is not provided')
    .isString()
    .withMessage('User is not a string')
    .isLength({ max: 24, min: 24 })
    .withMessage('User id is not 24 charachters'),
];
