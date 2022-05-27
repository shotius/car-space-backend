import { body } from 'express-validator';

export const userMessage = [
  body('phone')
    .exists()
    .notEmpty()
    .withMessage('Phone is not provided')
    .isLength({ min: 9, max: 9 })
    .withMessage('Phone number should have 9 numbers'),
];
