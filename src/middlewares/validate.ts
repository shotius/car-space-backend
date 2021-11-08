import { ValidationChain, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import { validation } from 'utils/functions/responseApi';
import { MyValidationErrors } from '../../shared_with_front/types/types-shared';

// function for custom error response for express validator
// with performance boost with promise all
export const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);

    if (errors.isEmpty()) {
      return next();
    }

    const response: MyValidationErrors[] = errors.array().map(error => {
      return {
        param: error.param, 
        msg: error.msg
      }
    })

    res.status(422).json(
      validation({
        errors: response,
      })
    );
  };
};
