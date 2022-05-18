import CopartCars from 'models/car-copart.model';
import CarDealer from 'models/car-dealer.model';
import { BaseFilterProps } from 'types';
import { ICarDealer } from '../../shared_with_front/types/types-shared';
import { HasKeys } from './../../shared_with_front/contants';
import { ICarCopart } from './../../shared_with_front/types/types-shared.d';

export class CarServices {
  protected Model: any;

  constructor(model: any) {
    this.Model = model;
  }

  getLocations = async () => {
    return await this.Model.find({}).distinct('lC');
  };

  getAllCars = async () => {
    return await this.Model.find({});
  };

  // Get all distinct damage and secondary damage conditions
  getConditions = async () => {
    const conditions = await Promise.all([
      this.Model.find({}).distinct('dmg'),
      this.Model.find({}).distinct('sDmg'),
    ]);

    // merge all array results
    const merged = conditions.reduce<string[]>(
      (curr: string[], acc: string[]) => {
        return acc.concat(curr);
      },
      []
    );

    return [...new Set(merged)];
  };

  getAllBrands = async () => {
    return await this.Model.distinct('m');
  };

  getModels = async (brands: string[]) => {
    const models = await this.Model.aggregate([
      { $match: { m: { $in: brands } } },
      { $group: { _id: '$m', models: { $addToSet: '$mG' } } },
      { $project: { _id: 0, brand: '$_id', models: '$models' } },
    ]);
    return models;
  };

  /**Get last 8 cars */
  getRecentCars = async () => {
    return await this.Model.find().sort({ _id: -1 }).limit(4);
  };
}

/** Interfaces */
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

/** Get All cars */
const getCopartCars = ({ filters }: BaseGetCarInterface) => {
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

  return CopartCars.find({
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

/** Get All cars */
const getAllCars = ({ filters }: BaseGetCarInterface) => {
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

  return CarDealer.find({
    $and: [
      {
        $or: [
          { m: !shouldGetAllcars ? { $in: brands } : { $exists: true } }, // brand filter
          { mG: { $in: models } }, // model filter
        ],
      },
      { y: { $gte: year_from || 0, $lte: year_to || 9999 } }, // year range filter
      { eng: { $gte: engine_from || 0, $lte: engine_to || 9999 } }, // engine range filter
      { price: { $gte: priceFrom, $lte: priceTo } }, // price range filter
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
      { dmg: !isConditionsEmpty ? { $in: conditions } : { $exists: true } },
      { keys: keys === HasKeys.YES ? { $eq: keys } : { $exists: true } },
      {
        $or: [
          { mostDemand: mostDemand ? true : { $exists: true } },
          { mostDemand: mostDemand ? true : { $exists: false } },
        ],
      },
      {
        $or: [
          { dealerId: dealerId ? dealerId : { $exists: true } },
          { dealerId: dealerId ? dealerId : { $exists: false } },
        ],
      },
    ],
  });
};

/**Get last 8 cars */
const getRecentCars = async () => {
  return await CarDealer.find().sort({ _id: -1 }).limit(4);
};

/**
 * GetPaginated Card */
const getCarsPaginated = async ({
  limit,
  page,
  filters,
}: getCarsProps): Promise<ICarDealer[] | ICarCopart[]> => {
  // how many cars to skip
  const startFrom = (page - 1) * limit;

  const cars = await getCopartCars({
    filters,
  })
    .skip(startFrom)
    .limit(limit);

  return cars;
};

/**Get total pages count */
const getPageCount = async ({ filters, limit }: GetPageCountProps) => {
  const carsTotal = await getAllCars({
    filters,
  }).countDocuments();

  return Math.ceil(carsTotal / limit);
};

// get all distinct brands
const getAllBrands = async () => {
  return await CarDealer.distinct('m');
};

// Based on a brand getting all distrinct models
const getModels = async (brands: string[]) => {
  const models = await CarDealer.aggregate([
    { $match: { m: { $in: brands } } },
    { $group: { _id: '$m', models: { $addToSet: '$mG' } } },
    { $project: { _id: 0, brand: '$_id', models: '$models' } },
  ]);
  return models;
};

// Get a car with lot number
const getSingleCar = async (lotNumber: string) => {
  return CarDealer.find({ lN: lotNumber });
};

// Get all distinct damage and secondary damage conditions
const getConditions = async () => {
  const conditions = await Promise.all([
    CarDealer.find({}).distinct('dmg'),
    CarDealer.find({}).distinct('sDmg'),
  ]);

  // merge all array results
  const merged = conditions.reduce<string[]>(
    (curr: string[], acc: string[]) => {
      return acc.concat(curr);
    },
    []
  );

  return [...new Set(merged)];
};

// get all distinct car body styles
const getTypes = async () => {
  return await CarDealer.find({}).distinct('bSt');
};

// Get all locations
const getLocation = async () => {
  return await CarDealer.find({}).distinct('lC');
};

// Get all distinc drives (4x4) and so on
const getDrives = async () => {
  return await CarDealer.find({}).distinct('dr');
};

// get all types of distinct fuel
const getFuels = async () => {
  return await CarDealer.find({}).distinct('fuel');
};

const getCylinders = async () => {
  return await CarDealer.distinct('cyl');
};

const getSalesStatus = async () => {
  return await CarDealer.distinct('sS');
};

const getTransmissions = async () => {
  return await CarDealer.distinct('trans');
};

/**
 *
 * @param param0 {car} car body received from input
 * @param param1 {thumb} blured img
 * @returns true if everything is ok
 */
interface AddCarProps {
  car: ICarDealer;
  blur: string;
  imgUrls: string[];
}

const addCar = async ({ car, blur, imgUrls }: AddCarProps) => {
  const carObj = car;
  carObj['imgUrls'] = imgUrls;
  carObj['imgT'] = blur;

  const newCar = new CarDealer(carObj);

  await newCar.save();
  return true;
};

const getLocations = async () => {
  return await CarDealer.find({}).distinct('lC');
};

const carServices = {
  addCar,
  getLocations, 
  getCarsPaginated,
  getAllBrands,
  getModels,
  getSingleCar,
  getConditions,
  getTypes,
  getLocation,
  getDrives,
  getFuels,
  getCylinders,
  getSalesStatus,
  getPageCount,
  getTransmissions,
  getRecentCars,
  getAllCars,
};

export default carServices;
