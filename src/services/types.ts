import {
  LoginParams,
  MyValidationErrors,
} from '../../shared_with_front/types/types-shared';

export interface ParsedLogin {
  loginParams?: LoginParams;
  errors?: MyValidationErrors[];
}


export interface ChangePasswordProps {
  userId: string;
  passwordHash: string;
}