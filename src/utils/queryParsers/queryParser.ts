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

const queryParser = { Bool };

export default queryParser;
