export class ApiError extends Error {
  public statusCode: number;
  public message: string;

  constructor(statusCode: number, message: string, stack = '') {
    super(message);
    this.statusCode = statusCode;
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
      (error as ApiError).statusCode !== undefined &&
      typeof (error as ApiError).message === 'string'
    );
  }
}
