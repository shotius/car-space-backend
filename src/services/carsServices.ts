// import CarImagesService from 'services/carImagesService';
import { ICar } from '../../shared_with_front/types/types-shared';
import Car from '../models/car';

/** Interfaces */
interface getCarsProps {
  page: number;
  limit: number;
  brands: string[];
}

interface GetPageCountProps {
  brands: string[];
  limit: number;
}

interface GetAllCarsProps {
  brands: string[];
}

/** Get All cars */
const getAllCars = ({ brands }: GetAllCarsProps) => {
  return Car.find({
    m: brands.length ? { $in: brands } : { $exists: true },
  });
};

/** GetPaginated Card */
const getCarsPaginated = async ({
  limit,
  page,
  brands,
}: getCarsProps): Promise<ICar[]> => {
  // how many cars to skip
  const startFrom = (page - 1) * limit;

  // retrieve cars
  const cars = await getAllCars({ brands }).skip(startFrom).limit(limit);

  return cars;
};

/**Get total pages count */
const getPageCount = async ({ brands, limit }: GetPageCountProps) => {
  const carsTotal = await getAllCars({ brands }).countDocuments();

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
const getModels = async (brand: string) => {
  const models = await Car.find({ m: brand }).distinct('mD');
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
};
