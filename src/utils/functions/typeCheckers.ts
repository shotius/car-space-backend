import { RoleTypes } from './../../../shared_with_front/types/types-shared.d';
import { KeysEnum, TransmissionEnum } from 'utils/constants';
import {
  Keys,
  Transmission,
} from '../../../shared_with_front/types/types-shared';
import { Roles } from '../../../shared_with_front/contants';

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isNumber = (num: unknown): num is number => {
  return !!Number(num) || num instanceof Number;
};

const isTransmission = (trans: unknown): trans is Transmission => {
  return (
    trans === TransmissionEnum.AUTOMATIC ||
    trans === TransmissionEnum.CVT ||
    trans === TransmissionEnum.MANUAL
  );
};

const isKeys = (keys: unknown): keys is Keys => {
  return keys === KeysEnum.NO || keys === KeysEnum.YES || keys === KeysEnum.EXM;
};

const isRole = (role: unknown): role is RoleTypes => {
  return role === Roles.DEALER || role === Roles.USER;
};

const isDate = (date: unknown): date is Date => {
  return typeof date === 'string' && !!Date.parse(date);
  // "deliveryAt": "2012-04-23T18:25:43.511Z",
};

const isBoolean = (val: unknown): val is boolean => {
  return typeof val === 'boolean';
};

const isStringifiedBoolean = (val: unknown): val is boolean => {
  return val === 'false' || val === 'true';
};

const typeChecker = {
  isString,
  isNumber,
  isTransmission,
  isStringifiedBoolean,
  isKeys,
  isRole,
  isDate,
  isBoolean,
};
export default typeChecker;
