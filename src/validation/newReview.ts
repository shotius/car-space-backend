import { body } from 'express-validator';

export const newReview = [
  body('text')
    .exists()
    .withMessage('Review text is missing')
    .isString()
    .withMessage('Review is not a string'),
  body('userId')
    .exists()
    .withMessage('User id is not provided')
    .isLength({ min: 24, max: 24 })
    .withMessage('length of user id is not correct'),
];
