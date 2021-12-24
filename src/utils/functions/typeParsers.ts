import { RoleTypes } from './../../../shared_with_front/types/types-shared.d';
import {
  Keys,
  Transmission,
} from '../../../shared_with_front/types/types-shared';
import typeChecker from './typeCheckers';
import { Roles } from '../../../shared_with_front/contants';

const parseString = (text: unknown): string => {
  if (!text || !typeChecker.isString(text)) {
    if (typeChecker.isNumber(text)) {
      return text.toString();
    }
    return '';
  }
  return text;
};

const parseNumber = (num: unknown): number => {
  if (!num || !typeChecker.isNumber(num)) {
    return 0;
  }
  return num;
};

const parseTransmission = (trans: unknown): Transmission => {
  if (!trans || !typeChecker.isTransmission(trans)) {
    return '';
  }
  return trans;
};

const parseKeys = (keys: unknown): Keys => {
  if (!keys || !typeChecker.isKeys(keys)) {
    return '';
  }
  return keys;
};

const parseRole = (role: unknown): RoleTypes => {
  if (!role || !typeChecker.isRole(role)) {
    return Roles.USER;
  }
  return role;
};

const parseDate = (date: unknown): Date | undefined => {
  if (!date || !typeChecker.isDate(date)) {
    return undefined;
  }
  return date;
};

const typeParser = {
  parseString,
  parseNumber,
  parseTransmission,
  parseKeys,
  parseRole,
  parseDate,
};

export default typeParser;
