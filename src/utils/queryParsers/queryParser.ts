const Bool = (query: any, queryName: string): boolean => {
  const q = query[queryName];
  if (q === 'true') {
    return true;
  }
  if (q === 'false') {
    return false;
  }
  return false;
};

const asNumber = (query: any, queryKey: string): number | undefined => {
  const q = query[queryKey];
  if (Number(q)) {
    return Number(q);
  }
  return 0;
};

const asString = (query: any, queryKey: string): string => {
  return query[queryKey];
};

const queryParser = { Bool, asNumber , asString};

export default queryParser;
