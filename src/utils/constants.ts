export const __prod__ = process.env.NODE_ENV === 'production';
export const PATH_TO_CAR_DATA = './dist/utils';
export const COOKIE_NAME = 'uid'
export const FORGET_PASSWORD_PREFIX="forget-password:"

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
  ? 'https://whispering-atoll-93096.herokuapp.com'
  : 'http://localhost:3001';
