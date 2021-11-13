import {query} from 'express-validator'

export const validateLotNum = [
  query('lotNumber')
  .exists()
  .withMessage('lotNumber not provided')
  .isLength({min: 8, max: 8})
  .withMessage('lotNumber is incorrect')
  .custom((value) => {
    if (Number(value)){
      return true
    } else {
      throw new Error('Lot number is not a number')
    }
  })
]
