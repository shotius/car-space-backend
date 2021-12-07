import express from 'express';
import logger from './logger';
import HttpException from 'exceptions/HttpException';
import { Request, Response, NextFunction } from 'express';
import { ApiDefaultError } from '../../shared_with_front/types/types-shared';

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
export const isAuth = (req: Request, _res: Response, next: NextFunction) => {
  const { user } = req.session;
  const id = user?.id;
  if (!id) {
    throw new Error('not authenticated');
  }

  next();
};
