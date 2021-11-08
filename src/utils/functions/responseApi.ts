import {
  MyValidationErrors,
  ApiResponse,
} from '../../../shared_with_front/types/types-shared';

//** Success */
interface SuccessProps {
  results: unknown;
  message?: string;
}

export const success = ({
  results,
}: SuccessProps): ApiResponse => {
  return {
    success: true,
    results,
  };
};

/** Error */
type ErrorProps = Pick<SuccessProps, 'message'>;

export const error = ({ message}: ErrorProps): ApiResponse => {
  return {
    message,
    success: false,
  };
};

/** Validation */
interface ValidationProps {
  errors: MyValidationErrors[];
}

export const validation = ({ errors }: ValidationProps): ApiResponse => {
  return {
    message: 'Validation Error',
    success: false,
    code: 422,
    errors,
  };
};
