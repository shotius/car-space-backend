const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

export const parseCarFilterBrands = (query: any): string[] => {
  const brand = query.brand || []
  if (isString(brand)) {
    return [brand]
  }
  return brand
}