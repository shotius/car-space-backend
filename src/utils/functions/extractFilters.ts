import { BaseFilterProps } from "types";
import { parseQueryAsArray } from "utils/queryParsers/parseQueryAsArray";
import { parseQueryAsNumber } from "utils/queryParsers/parseQueryAsNumber";
import { parseQueryModels } from "utils/queryParsers/parseQueryModels";

export const extractFilters = (query: any) => {
  const allBrands = parseQueryAsArray(query, 'brand');
  const modelsWithBrand = parseQueryModels(query.model);

  const brandsWithModels = modelsWithBrand.map((m) => m.brand);

  const models = modelsWithBrand.reduce<string[]>(
    (acc, cur) => acc.concat(cur.models),
    []
  );
  // parse other filters from query
  const filters: BaseFilterProps = {
    models,
    brands: allBrands.filter((brand) => !brandsWithModels.includes(brand)),
    year_from: parseQueryAsNumber(query, 'year_from'),
    year_to: parseQueryAsNumber(query, 'year_to'),
    engine_from: parseQueryAsNumber(query, 'engine_from'),
    engine_to: parseQueryAsNumber(query, 'engine_to'),
    types: parseQueryAsArray(query, 'type'),
    locations: parseQueryAsArray(query, 'location'),
    transmissions: parseQueryAsArray(query, 'transmission'),
    keys: (query as any).keys,
    drives: parseQueryAsArray(query, 'drive'),
    salesStatuses: parseQueryAsArray(query, 'sales_status'),
    fuels: parseQueryAsArray(query, 'fuel'),
    cylinders: parseQueryAsArray(query, 'cylinder'),
    conditions: parseQueryAsArray(query, 'condition'),
  };

  return filters;
}