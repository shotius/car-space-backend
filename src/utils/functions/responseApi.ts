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
  message,
}: SuccessProps<Type>): ApiSuccessResponse<Type> {
  return {
    success: true,
    message,
    results,
  };
}

/** Error */
type ErrorProps = {
  message: string;
  status?: number;
};

export const error = ({ message, status }: ErrorProps): ApiDefaultError => {
  return {
    success: false,
    error: message,
    status,
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

export function sendSuccess({
  results,
  message,
}: {
  results: any;
  message: string;
}) {
  return success({ results, message });
}
