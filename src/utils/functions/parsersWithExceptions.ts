import httpStatus from 'http-status';
import { ApiError } from './ApiError';
import typeChecker from './typeCheckers';

const parseString = (text: unknown, value: string): string => {
  if (!text || !typeChecker.isString(text)) {
    if (typeChecker.isNumber(text)) {
      return text.toString();
    }
    throw new ApiError(httpStatus.BAD_REQUEST, `invalid property ${value}`);
  }
  return text;
};

const parseNumber = (num: unknown, value: string): number => {
  if (!num || !typeChecker.isNumber(num)) {
    throw new ApiError(httpStatus.BAD_REQUEST, `invalid property ${value}`);
  }
  return num;
};

export const typeCheckWithException = {
  parseString,
  parseNumber,
};
