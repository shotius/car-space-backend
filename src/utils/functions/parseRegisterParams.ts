import { RegisterParams } from '../../../shared_with_front/types/types-shared';
import typeParser from './typeParsers';

interface Fields {
  fullName: unknown;
  email: unknown;
  role: unknown;
  password: unknown;
  phone: unknown;
}

export const parserRegisterParams = ({
  fullName,
  email,
  role,
  password,
  phone,
}: Fields): RegisterParams => {
  const returnObj: RegisterParams = {
    fullName: typeParser.parseString(fullName),
    email: typeParser.parseString(email).trim().toLowerCase(),
    password: typeParser.parseString(password),
    phone: typeParser.parseString(phone),
    role: typeParser.parseRole(role),
    privacy: true,
  };
  return returnObj;
};
