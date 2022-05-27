import CopartCars from 'models/car-copart.model';
import { BaseFilterProps } from 'types';
import { ICarCopart } from '../../shared_with_front/types/types-shared';
import { CarServices } from './cars.services';

interface BaseGetCarInterface {
  filters: BaseFilterProps;
}

interface getCarsProps extends BaseGetCarInterface {
  page: number;
  limit: number;
}

interface GetPageCountProps extends BaseGetCarInterface {
  limit: number;
}
class CopartCarService extends CarServices {
  constructor() {
    super(CopartCars);
  }

  getCarByLotNumber = async (lotNumber: string) => {
    return await this.Model.find({ lN: lotNumber });
  };

  getSalesStatus = async () => {
    return await this.Model.distinct('sS');
  };

  getAllCars = ({ filters }: BaseGetCarInterface) => {
    const {
      brands,
      models,
      year_from,
      year_to,
      types,
      locations,
      transmissions,
      drives,
      fuels,
      cylinders,
      conditions,
      engine_from,
      engine_to,
      keys,
      price_from,
      price_to,
      mostDemand,
      currencyPrice,
      dealerId,
    } = filters;
    const shouldGetAllcars = !!!(models.length || brands.length);

    const isTypesEmpty = !types.length;
    const isLocationsEmpty = !locations.length;
    const isTransmissionsEmpty = !transmissions.length;
    const isDrivesEmpty = !drives.length;
    const isFuelsEmpty = !fuels.length;
    const isCylindersEmpty = !cylinders.length;
    const isConditionsEmpty = !conditions.length;

    const numCylinders = cylinders.map((c) => parseInt(c));

    // converted prices
    const priceFrom =
      price_from && currencyPrice ? price_from / currencyPrice : 0;
    const priceTo =
      price_to && currencyPrice ? price_to / currencyPrice : 9999999;

    // return CopartCars.find()

    return this.Model.find({
      $and: [
        {
          $or: [
            { m: !shouldGetAllcars ? { $in: brands } : { $exists: true } }, // brand filter
            { mG: { $in: models } }, // model filter
          ],
        },
        { y: { $gte: year_from || 0, $lte: year_to || 9999 } }, // year range filter
        { eng: { $gte: engine_from || 0, $lte: engine_to || 9999 } }, // engine range filter
        // { price: { $gte: priceFrom, $lte: priceTo } }, // price range filter
        { bSt: !isTypesEmpty ? { $in: types } : { $exists: true } },
        { lC: !isLocationsEmpty ? { $in: locations } : { $exists: true } },
        {
          trans: !isTransmissionsEmpty
            ? { $in: transmissions }
            : { $exists: true },
        },
        { dr: !isDrivesEmpty ? { $in: drives } : { $exists: true } },
        { fuel: !isFuelsEmpty ? { $in: fuels } : { $exists: true } },
        { cyl: !isCylindersEmpty ? { $in: numCylinders } : { $exists: true } },
        // { dmg: !isConditionsEmpty ? { $in: conditions } : { $exists: true } },
        // { keys: keys === HasKeys.YES ? { $eq: keys } : { $exists: true } },
        // {
        //   $or: [
        //     { mostDemand: mostDemand ? true : { $exists: true } },
        //     { mostDemand: mostDemand ? true : { $exists: false } },
        //   ],
        // },
        // {
        //   $or: [
        //     { dealerId: dealerId ? dealerId : { $exists: true } },
        //     { dealerId: dealerId ? dealerId : { $exists: false } },
        //   ],
        // },
      ],
    });
  };

  /**
   * GetPaginated Card */
  getCarsPaginated = async ({
    limit,
    page,
    filters,
  }: getCarsProps): Promise<ICarCopart[]> => {
    const startFrom = (page - 1) * limit; // how many cars to skip
    const cars = await this.getAllCars({
      filters,
    })
      .skip(startFrom)
      .limit(limit);
    return cars;
  };

  /**Get total pages count */
  getPageCount = async ({ filters, limit }: GetPageCountProps) => {
    const carsTotal = await this.getAllCars({
      filters,
    }).countDocuments();

    return Math.ceil(carsTotal / limit);
  };
}

const copartCarsServices = new CopartCarService();
export default copartCarsServices;
