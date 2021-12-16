import { ICarDealer } from '../../../shared_with_front/types/types-shared';
import typeParser from './typeParsers';
const { parseKeys, parseString, parseNumber, parseTransmission } = typeParser;

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
  keys: unknown;
  fuelType: unknown;
  color: unknown;
  price: unknown;
  description: unknown;
  photos: unknown;
};

/**
 * Function parses object as a new Dealer car without img thumbnail and img urls
 * @param props receives uknown object
 * @returns ready made object for Dealer car
 */
export const parseNewCar = (
  props: Fields
): Omit<ICarDealer, 'imgT' | 'imgUrls' | 'id'> => {
  const newCar: Omit<ICarDealer, 'imgT' | 'imgUrls' | 'id'> = {
    m: parseString(props.manufacturer)?.toUpperCase(),
    bSt: parseString(props.bodyStyle)?.toUpperCase(),
    c: parseString(props.color)?.toUpperCase(),
    dmg: parseString(props.damage)?.toUpperCase(),
    dr: parseString(props.drive)?.toUpperCase(),
    fuel: parseString(props.fuelType)?.toUpperCase(),
    lC: parseString(props.location)?.toUpperCase(),
    mD: parseString(props.modelDetail)?.toUpperCase(),
    mG: parseString(props.modelGroup)?.toUpperCase(),
    desc: parseString(props.description)?.toUpperCase(),
    price: parseNumber(props.price),
    y: parseNumber(props.year),
    od: parseNumber(props.odometer),
    eng: parseNumber(props.engine),
    cyl: parseNumber(props.cylinders),
    trans: parseTransmission(props.transmission)?.toUpperCase(),
    keys: parseKeys(props.keys)?.toUpperCase(),
  };
  return newCar;
};
