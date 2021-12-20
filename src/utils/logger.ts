import { __prod__ } from './constants';

const info = (...params: any) => {
  if (!__prod__) {
    console.log(...params);
  }
};

const error = (...params: any) => {
  if (!__prod__) {
    console.log(...params);
  }
};

export const logger = {
  error,
  info,
};
export default logger;
