// import CarImagesService from 'services/carImagesService';
import { BaseFilterProps } from 'types';
import { ICar } from '../../shared_with_front/types/types-shared';
import Car from '../models/car.model';

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
const getAllCars = ({ filters }: BaseGetCarInterface) => {
  const {
    brands,
    models,
    year_from,
    year_to,
    types,
    locations,
    transmissions,
    // keys,
    drives,
    salesStatuses,
    fuels,
    cylinders,
    conditions,
    engine_from,
    engine_to,
  } = filters;
  const shouldGetAllcars = !!!(models.length || brands.length);

  const isTypesEmpty = !types.length;
  const isLocationsEmpty = !locations.length;
  const isTransmissionsEmpty = !transmissions.length;
  // // const isKeysEmpty = keys.length;
  const isDrivesEmpty = !drives.length;
  const isSalesStatusesEmpty = !salesStatuses.length;
  const isFuelsEmpty = !fuels.length;
  const isCylindersEmpty = !cylinders.length;
  const isConditionsEmpty = !conditions.length;

  return Car.find({
    $and: [
      {
        $or: [
          { m: !shouldGetAllcars ? { $in: brands } : { $exists: true } }, // brand filter
          { mG: { $in: models } }, // model filter
        ],
      },
      { $expr: { $gte: [{ $toInt: '$y' }, year_from || 0] } }, // year from filter
      { $expr: { $lte: [{ $toInt: '$y' }, year_to || 9999] } }, // year to filter
      { $expr: { $gte: [{ $toDouble: '$eng' }, engine_from || 0] } }, // engine from filter
      { $expr: { $lte: [{ $toDouble: '$eng' }, engine_to || 9999] } }, // engine to filter
      { bSt: !isTypesEmpty ? { $in: types } : { $exists: true } },
      { lC: !isLocationsEmpty ? { $in: locations } : { $exists: true } },
      {
        trans: !isTransmissionsEmpty
          ? { $in: transmissions }
          : { $exists: true },
      },
      { dr: !isDrivesEmpty ? { $in: drives } : { $exists: true } },
      {
        sS: !isSalesStatusesEmpty ? { $in: salesStatuses } : { $exists: true },
      },
      { fuel: !isFuelsEmpty ? { $in: fuels } : { $exists: true } },
      { cyl: !isCylindersEmpty ? { $in: cylinders } : { $exists: true } },
      { dmg: !isConditionsEmpty ? { $in: conditions } : { $exists: true } },
    ],
  });
};

/**
 * GetPaginated Card */
const getCarsPaginated = async ({
  limit,
  page,
  filters,
}: getCarsProps): Promise<ICar[]> => {
  // how many cars to skip
  const startFrom = (page - 1) * limit;

  const cars = await getAllCars({
    filters,
  })
    .skip(startFrom)
    .limit(limit);

  return cars;
};

/**
 * Get total pages count */
const getPageCount = async ({ limit, filters }: GetPageCountProps) => {
  const carsTotal = await getAllCars({
    filters,
  }).countDocuments();

  // total cars in the db
  // total pages for pagination
  const pagesTotal = Math.ceil(carsTotal / limit);

  return pagesTotal;
};

// get all distinct brands
const getAllBrands = async () => {
  return await Car.distinct('m');
};

// Based on a brand getting all distrinct models
const getModels = async (brands: string[]) => {
  const models = await Car.aggregate([
    { $match: { m: { $in: brands } } },
    { $group: { _id: '$m', models: { $addToSet: '$mG' } } },
    { $project: { _id: 0, brand: '$_id', models: '$models' } },
  ]);
  return models;
};

// Get a car with lot number
const getSingleCar = async (lotNumber: string) => {
  return Car.find({ lN: lotNumber });
};

// Get all distinct damage and secondary damage conditions
const getConditions = async () => {
  const conditions = await Promise.all([
    Car.find({}).distinct('dmg'),
    Car.find({}).distinct('sDmg'),
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
  return await Car.find({}).distinct('bSt');
};

// Get all locations
const getLocation = async () => {
  return await Car.find({}).distinct('lC');
};

// Get all distinc drives (4x4) and so on
const getDrives = async () => {
  return await Car.find({}).distinct('dr');
};

// get all types of distinct fuel
const getFuels = async () => {
  return await Car.find({}).distinct('fuel');
};

const getCylinders = async () => {
  return await Car.distinct('cyl');
};

const getSalesStatus = async () => {
  return await Car.distinct('sS');
};

const getTransmissions = async () => {
  return await Car.distinct('trans');
};

export default {
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
};
