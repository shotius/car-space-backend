import typeChecker from "utils/functions/typeCheckers";

export const parseQueryAsArray = (query: any, queryName: string): string[] => {
  const q = query[queryName] || [];
  if (typeChecker.isString(q)) {
    return [q];
  }
  return q;
};
