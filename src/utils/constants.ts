export const __prod__ = process.env.NODE_ENV === "production"
export const PATH_TO_CAR_DATA  = './dist/utils'


export enum TransmissionEnum {
  MANUAL = 'Manual',
  AUTOMATIC = 'Automatic',
  CVT = 'CVT',
}

export enum KeysEnum {
  YES = 'YES',
  NO = 'NO',
}