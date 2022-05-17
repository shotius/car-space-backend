export const __prod__ = process.env.NODE_ENV === 'production';
export const __test__ = process.env.NODE_ENV === 'testing';

export const PATH_TO_CAR_DATA = './dist/utils';
export const COOKIE_NAME = 'uid';
export const FORGET_PASSWORD_PREFIX = 'forget-password:';

export enum TransmissionEnum {
  MANUAL = 'Manual',
  AUTOMATIC = 'Automatic',
  CVT = 'CVT',
}

export enum KeysEnum {
  YES = 'YES',
  NO = 'NO',
}

export const DOMAIN = __prod__
  ? 'https://carspace.ge'
  : 'http://localhost:3001';
