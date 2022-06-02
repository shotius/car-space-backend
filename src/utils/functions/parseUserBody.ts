import httpStatus from 'http-status';
import typeChecker from 'utils/functions/typeCheckers';
import typeParser from 'utils/functions/typeParsers';
import { IUserBase } from './../../../shared_with_front/types/types-shared.d';
import { ApiError } from './ApiError';
import { typeCheckWithException } from './parsersWithExceptions';

const { parseString, parseNumber } = typeCheckWithException;
const { isString, isNumber } = typeChecker;

interface Fields {
  id: unknown;
  fullName: unknown;
  email: unknown;
  phone: unknown;
  idNumber?: unknown;
}

export const parseUserBody = ({
  id,
  fullName,
  email,
  phone,
  idNumber,
}: Fields) => {
  const parsedUser: IUserBase = {
    id: parseString(id,'id'),
    fullName: parseString(fullName, 'fullName'),
    email: parseString(email, 'email'),
    phone: parseString(phone, 'phone'),
    idNumber: parseNumber(idNumber, 'idNumber'),
  };
  return parsedUser;
};
