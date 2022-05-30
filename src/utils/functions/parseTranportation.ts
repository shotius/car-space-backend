import typeParser from 'utils/functions/typeParsers';
import {
  IBaseTransportationObject
} from '../../../shared_with_front/types/types-shared';

interface Fields {
  city: unknown;
  auction: unknown;
  price: unknown;
  state: unknown;
  zip: unknown;
}

export const parseTranportation = ({
  city,
  auction,
  price,
  state,
  zip,
}: Fields) => {
  const tranportation: IBaseTransportationObject = {
    city: typeParser.parseString(city),
    auction: typeParser.parseString(auction),
    price: typeParser.parseNumber(price),
    state: typeParser.parseString(state),
    zip: typeParser.parseString(zip),
  };

  return tranportation;
};
