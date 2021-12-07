import {
  ApiDefaultError,
  ApiSuccessResponse,
  ApiValidationError,
  MyValidationErrors,
} from '../../../shared_with_front/types/types-shared';

//** Success */
interface SuccessProps<Type> {
  results: Type;
  message?: string;
}

export function success<Type>({
  results,
}: SuccessProps<Type>): ApiSuccessResponse<Type> {
  return {
    success: true,
    results,
  };
}

/** Error */
type ErrorProps = {
  message: string;
};

export const error = ({ message }: ErrorProps): ApiDefaultError => {
  return {
    success: false,
    error: message,
  };
};

/** Validation */
interface ValidationProps {
  errors: MyValidationErrors[];
}

export const validation = ({ errors }: ValidationProps): ApiValidationError => {
  return {
    message: 'Validation Error',
    success: false,
    status: 422,
    errors,
  };
};
