import { isString } from 'utils/functions/isString';
import { SelectedCarModel } from '../../../shared_with_front/types/types-shared';

export const parseQueryModels = (
  models: undefined | Record<string, string> | Record<string, string[]>
): SelectedCarModel[] => {
  if (models) {
    const brands = Object.keys(models);
    const formatedModels: SelectedCarModel[] = [];

    brands.map((brand) => {
      const model = models[brand];
      if (isString(model)) {
        formatedModels.push({
          brand,
          models: [model],
        });
      } else {
        formatedModels.push({
          brand,
          models: model,
        });
      }
    });

    return formatedModels;
  }

  return [];
};
