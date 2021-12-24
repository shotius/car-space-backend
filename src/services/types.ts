import {
  LoginParams,
  MyValidationErrors,
} from '../../shared_with_front/types/types-shared';

export interface ParsedLogin {
  loginParams?: LoginParams;
  errors?: MyValidationErrors[];
}

export interface INewOrderCar {
  userId: string;
  carName: string;
  deliveryAt?: Date;
  createdAt?: Date;
  location: string;
  price: number;
  status: string;
}

export interface ChangePasswordProps {
  userId: string;
  passwordHash: string;
}
