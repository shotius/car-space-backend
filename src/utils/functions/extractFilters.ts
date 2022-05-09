import { BaseFilterProps } from 'types';
import { parseQueryAsArray } from 'utils/queryParsers/parseQueryAsArray';
import { parseQueryAsNumber } from 'utils/queryParsers/parseQueryAsNumber';
import { parseQueryModels } from 'utils/queryParsers/parseQueryModels';
import queryParser from 'utils/queryParsers/queryParser';

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
    price_from: parseQueryAsNumber(query, 'price_from'),
    price_to: parseQueryAsNumber(query, 'price_to'),
    engine_from: parseQueryAsNumber(query, 'engine_from'),
    engine_to: parseQueryAsNumber(query, 'engine_to'),
    types: parseQueryAsArray(query, 'type'),
    locations: parseQueryAsArray(query, 'location'),
    transmissions: parseQueryAsArray(query, 'transmission'),
    keys: (query as any).keys,
    drives: parseQueryAsArray(query, 'drive'),
    fuels: parseQueryAsArray(query, 'fuel'),
    cylinders: parseQueryAsArray(query, 'cylinder'),
    conditions: parseQueryAsArray(query, 'condition'),
    mostDemand: queryParser.Bool(query, 'mostdemand'),
    currencyPrice: parseQueryAsNumber(query, 'CURRENCY_PRICE') || 1, 
    dealerId: queryParser.asString(query, 'dealerId')
  };

  return filters;
};
