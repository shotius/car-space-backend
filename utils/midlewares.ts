import express from 'express';
import logger from '../utils/logger';
import HttpException from 'exceptions/HttpException';

export const defaultErrorHander = (
  error: HttpException,
  _request: express.Request,
  response: express.Response
) => {
  logger.error(error.message);
  const status = error.status || 500;
  const message = error.message || 'something went wrong';

  if (error.name === 'CastError') {
    response.status(400).send({ error: 'malformed Id' });
  } else if (error.name === 'ValidationError') {
    response.status(400).send({ error: error.message });
  }
  response.status(status).send({ status, message });
};

export const unknownEndpoint = (
  _request: express.Request,
  response: express.Response
) => {
  response.status(404).send({ error: 'unknow endpoint' });
};
