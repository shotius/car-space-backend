import { body } from 'express-validator';
import { Roles } from '../../shared_with_front/contants';

export const registerParams = [
  body('email')
    .exists()
    .notEmpty()
    .withMessage('Email is Required')
    .isEmail()
    .normalizeEmail()
    .withMessage('Invalid Email'),
  body('fullName').exists().notEmpty().withMessage('fullname is required'),
  body('password')
    .exists()
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 4 })
    .withMessage('Password is too Short'),
  body('role')
    .exists()
    .notEmpty()
    .withMessage('Role is not proviede')
    .isIn([Roles.DEALER, Roles.USER]),
  body('privacy').custom((value) => {
    if (value !== true) {
      throw new Error('Privacy is not chosen');
    }
    return true;
  }),
];
