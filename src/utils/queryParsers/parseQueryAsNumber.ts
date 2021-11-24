export const parseQueryAsNumber = (
  query: any,
  queryKey: string
): number | undefined => {
  const q = query[queryKey];
  if (Number(q)) {
    return Number(q)
  }
  return undefined;
};
