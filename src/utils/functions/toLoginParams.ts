import { ParsedLogin } from './../../services/types';

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseUsername = (username: unknown): string => {
  if (!username || !isString(username)) {
    throw new Error('Incorrect or missing username');
  }
  return username;
};

const parsePassword = (password: unknown): string => {
  if (!password || !isString(password)) {
    const error = {error: 'Incorrect or missing password'}
    throw error;
  }

  return password;
};

type Fields = { username: unknown; password: unknown };

export const toLoginParams = ({ username, password }: Fields): ParsedLogin => {

  const parsedLoginParams: ParsedLogin['loginParams'] = {
    username: parseUsername(username),
    password: parsePassword(password),
  };

  return { loginParams: parsedLoginParams };
};
