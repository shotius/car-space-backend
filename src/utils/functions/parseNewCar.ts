import { ICarDealer } from '../../../shared_with_front/types/types-shared';
import typeParser from './typeParsers';
const {
  parseKeys,
  parseString,
  parseNumber,
  parseTransmission,
  parseStringifiedBoolean,
} = typeParser;

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
  mostDemand: unknown;
  dealerName: unknown;
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
    m: parseString(props.manufacturer)?.toUpperCase().trim(),
    bSt: parseString(props.bodyStyle)?.toUpperCase().trim(),
    c: parseString(props.color)?.toUpperCase().trim(),
    dmg: parseString(props.damage)?.toUpperCase().trim(),
    dr: parseString(props.drive)?.toUpperCase().trim(),
    fuel: parseString(props.fuelType)?.toUpperCase().trim(),
    lC: parseString(props.location)?.toUpperCase().trim(),
    mD: parseString(props.modelDetail)?.toUpperCase().trim(),
    mG: parseString(props.modelGroup)?.toUpperCase().trim(),
    desc: parseString(props.description)?.toUpperCase().trim(),
    price: parseNumber(props.price),
    y: parseNumber(props.year),
    od: parseNumber(props.odometer),
    eng: parseNumber(props.engine),
    cyl: parseNumber(props.cylinders),
    trans: parseTransmission(props.transmission)?.toUpperCase().trim(),
    keys: parseKeys(props.keys)?.toUpperCase().trim(),
    mostDemand: parseStringifiedBoolean(props.mostDemand),
    dealername: parseString(props.dealerName).toUpperCase().trim(),
  };
  return newCar;
};
