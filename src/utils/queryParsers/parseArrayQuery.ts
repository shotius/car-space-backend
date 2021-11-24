const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

export const parseArrayQuery = (query: any, queryName: string): string[] => {
  const q = query[queryName] || [];
  if (isString(q)) {
    return [q];
  }
  return q;
};
