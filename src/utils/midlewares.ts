import { ApiError } from './functions/ApiError';
import { error } from 'utils/functions/responseApi';
import logger from './logger';
import HttpException from 'exceptions/HttpException';
import express, { Request, Response, NextFunction } from 'express';
import { ApiDefaultError } from '../../shared_with_front/types/types-shared';
import mongoose from 'mongoose';
import httpStatus from 'http-status';

/**
 * Function will convert errors into the standard ApiError type
 * @param err any type oferror 
 * @param _req 
 * @param _res 
 * @param next 
 */
export const errorConverter = (
  err: any,
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    const statusCode =
      error.statusCode || error instanceof mongoose.Error
        ? httpStatus.BAD_REQUEST
        : httpStatus.INTERNAL_SERVER_ERROR;

    const message = error.message || httpStatus[statusCode].toString();
    error = new ApiError(statusCode, message, err.stack);
  }
  next(error)
};

/**
 * Function is the last error handler middleware
 * so we need to check if the error happend in the api call
 * else handle errors in the frontend
 * @param error : thrown error in the app
 * @param request : express Request
 * @param response
 * @param next : next Function
 */
export const defaultErrorHander = (
  error: HttpException,
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) => {
  logger.error(error.message);

  // console.log('error in default middleware: ', error)
  // default error response
  let defaultResponse: ApiDefaultError = {
    success: false,
    error: 'something went wrong',
  };

  // handle known errors
  if (error.name === 'CastError') {
    defaultResponse.error = 'malformed Id';
    return response.status(400).send(defaultResponse);
  } else if (error.name === 'ValidationError') {
    defaultResponse.error = error.message;
    return response.status(400).send(defaultResponse);
  } else if (error.name === 'not authenticated') {
    defaultResponse.error = error.message;
    return response.status(401).send(defaultResponse);
  }

  // ------

  // If this url included 'api' in the path handle response else next()
  const { originalUrl } = request;
  const pathes = originalUrl.split('/');

  // it is not a server error
  if (!pathes.includes('api')) {
    return next();
  } else {
    const status = error.status || 500;
    const message = error.message || 'something went wrong';
    defaultResponse.status = status;
    defaultResponse.error = message;
    return response.status(status).send(defaultResponse);
  }
};

/**
 * Middleware checks if user is authenticted
 * @param req
 * @param _res
 * @param next
 */
export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  const { user } = req.session;
  const id = user?.id;
  if (!id) {
    return res.status(401).send(
      error({
        message: 'not authenticated',
        status: 401,
      })
    );
  }

  return next();
};
