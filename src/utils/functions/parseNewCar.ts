import { KeysEnum, TransmissionEnum } from 'utils/constants';
import {
  ICarDealer,
  Keys,
  Transmission,
} from '../../../shared_with_front/types/types-shared';

type Fields = {
  manufacturer: unknown;
  modelGroup: unknown;
  modelDetail: unknown;
  bodyStyle: unknown;
  damage: unknown;
  location: unknown;
  odometer: unknown;
  cylinders: unknown;
  drive: unknown;
  engine: unknown;
  transmission: unknown;
  year: unknown;
  hasKeys: unknown;
  fuelType: unknown;
  color: unknown;
  price: unknown;
  description: unknown;
  photos: unknown;
};

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

const parseString = (text: unknown): string | undefined => {
  if (!text || !isString(text)) {
    return undefined;
  }
  return text;
};

const parseNumber = (num: unknown): number => {
  if (!num || !isNumber(num)) {
    return 0;
  }
  return num;
};

const parseTransmission = (trans: unknown): Transmission | undefined => {
  if (!trans || !isTransmission(trans)) {
    return undefined;
  }
  return trans;
};

const parseKeys = (keys: unknown): Keys | undefined => {
  if (!keys || !isKeys(keys)) {
    return undefined;
  }
  return keys;
};


/**
 * Function parses object as a new Dealer car without img thumbnail and img urls
 * @param props receives uknown object
 * @returns ready made object for Dealer car
 */
export const parseNewCar = (
  props: Fields
): Omit<ICarDealer, 'imgT' | 'imgUrls' | "id"> => {
  const newCar: Omit<ICarDealer, 'imgT' | 'imgUrls' | 'id'> = {
    m: parseString(props.manufacturer),
    bSt: parseString(props.bodyStyle),
    c: parseString(props.color),
    dmg: parseString(props.damage),
    dr: parseString(props.drive),
    fuel: parseString(props.fuelType),
    lC: parseString(props.location),
    mD: parseString(props.modelDetail),
    mG: parseString(props.modelGroup),
    desc: parseString(props.description), 
    price: parseNumber(props.price),
    y: parseNumber(props.year),
    od: parseNumber(props.odometer),
    eng: parseNumber(props.engine),
    cyl: parseNumber(props.cylinders),
    trans: parseTransmission(props.transmission),
    keys: parseKeys(props.hasKeys),
  };
  return newCar;
};
