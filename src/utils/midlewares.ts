import express from 'express';
import logger from './logger';
import HttpException from 'exceptions/HttpException';
import { Request, Response, NextFunction } from 'express';

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

  // handle known errors
  if (error.name === 'CastError') {
    response.status(400).send({ error: 'malformed Id' });
  } else if (error.name === 'ValidationError') {
    response.status(400).send({ error: error.message });
  } else if (error.name === 'not authenticated') {
    response.status(401).send({error: error.message})
  }

  // ------

  // If this url included 'api' in the path handle response else next()
  const { originalUrl } = request;
  const pathes = originalUrl.split('/');

  // it is not a server error
  if (!pathes.includes('api')) {
    next();
  } else {
    const status = error.status || 500;
    const message = error.message || 'something went wrong';
    response.status(status).send({ status, message });
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
