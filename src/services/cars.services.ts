import { ICarCopart } from './../../shared_with_front/types/types-shared.d';
import { HasKeys } from './../../shared_with_front/contants';
import CarDealer from 'models/car-dealer.model';
import CopartCars from 'models/car-copart.model';
import { ICarDealer } from '../../shared_with_front/types/types-shared';
import { BaseFilterProps } from 'types';

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
    drives,
    fuels,
    cylinders,
    conditions,
    engine_from,
    engine_to,
    keys,
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

  const cars = await getAllCars({
    filters,
  })
    .skip(startFrom)
    .limit(limit);

  return cars;
};

// const getCarsFromLotNumbers = async (
//   lotNumbers: string[]
// ): Promise<ICarCopart[]> => {
//   const cars = await CarCopart.find({ lN: { $in: lotNumbers } });
//   return cars;
// };

/**
 * Get total pages count */
const getPageCount = async ({ filters, limit }: GetPageCountProps) => {
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

const carServices = {
  addCar,
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
  // getCarsFromLotNumbers,
};

export default carServices;
