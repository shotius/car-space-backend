import {body} from 'express-validator'

export const addNewDealerCar = [
  body('manufacturer')
    .exists()
    .withMessage('Manufacturer is missing')
    .not()
    .isEmpty()
    .withMessage('Manufacturer is missing')
    .isString()
    .withMessage('Manufacturer must be text')
]