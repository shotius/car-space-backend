import { isString } from "utils/functions/isString";

export const parseQueryAsArray = (query: any, queryName: string): string[] => {
  const q = query[queryName] || [];
  if (isString(q)) {
    return [q];
  }
  return q;
};
