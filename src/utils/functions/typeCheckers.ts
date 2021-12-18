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
  return keys === KeysEnum.NO || keys === KeysEnum.YES;
};

const isRole = (role: unknown): role is RoleTypes => {
  return role === Roles.DEALER || role === Roles.USER;
};

const typeChecker = {
  isString,
  isNumber,
  isTransmission,
  isKeys,
  isRole,
};
export default typeChecker;
