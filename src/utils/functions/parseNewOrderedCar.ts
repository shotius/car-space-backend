import { INewOrderCar } from '../../../shared_with_front/types/types-shared';
import typeParser from './typeParsers';
interface Fields {
  userId: unknown;
  carName: unknown;
  deliveryAt: unknown;
  location: unknown;
  price: unknown;
  status: unknown;
}

export const parseNewOrderedCar = ({
  userId,
  carName,
  deliveryAt,
  location,
  price,
  status,
}: Fields) => {
  const newOrderedcar: INewOrderCar = {
    userId: typeParser.parseString(userId),
    carName: typeParser.parseString(carName),
    location: typeParser.parseString(location),
    price: typeParser.parseNumber(price),
    status: typeParser.parseString(status),
    deliveryAt: typeParser.parseDate(deliveryAt),
  };

  return newOrderedcar;
};
