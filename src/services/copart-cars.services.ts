import CopartCars from 'models/car-copart.model';
import { CarServices } from './cars.services';
class CopartCarService extends CarServices {
  protected Model: any;

  constructor() {
    super(CopartCars);
  }
}

export const copartCarsServices = new CopartCarService();
