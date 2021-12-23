export class ApiError extends Error {
  public status: number;
  public message: string;

  constructor(statusCode: number, message: string, stack = '') {
    super(message);
    this.status = statusCode;
    this.message = message;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  static isApiError(error: unknown): error is ApiError {
    return (
      !!error &&
      (error as ApiError).status !== undefined &&
      typeof (error as ApiError).message === 'string'
    );
  }
}
