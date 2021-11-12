// import CarImagesService from 'services/carImagesService';
import { ICar } from '../../shared_with_front/types/types-shared';
import Car from '../models/car';
// import { ICarImages } from 'types';
// import {Document} from 'mongoose'

const getCars = async (
  page: number,
  limit: number
): Promise<{
  cars: ICar[];
  pagesTotal: number;
  // carImages: (ICarImages & Document<any, any, ICarImages>)[];
}> => {
  // ): Promise<{ cars: ICar[]; pagesTotal: number }> => {

  // total cars in the db
  const carsTotal = await Car.find({}).countDocuments();

  // total pages for pagination
  const pagesTotal = Math.floor(carsTotal / limit);

  // how many cars to skip
  const startFrom = (page - 1) * limit;

  // retrieve cars
  const cars = await Car.find({}).skip(startFrom).limit(limit);

  // const carImages = await CarImagesService.getImages();
  // const ImagePromises = cars.map(async (car): Promise<ICarImages> => {
  //   const result = axios
  //     .get(car.imgU)
  //     .then(({ data }) => data)
  //     .catch((err) => {
  //       if (err.response.status === 404) {
  //         return 'Car Images not found';
  //       }
  //       return 'Some Other error occured while fetching car images';
  //     });
  //     // console.log(result);
  //   return result;
  // });

  // const carImages = await Promise.all(ImagePromises)
  //   .then((data) => data)
  //   .catch((err) => err);

  //   console.log(carImages)
  // console.log(Images)

  // return { cars, pagesTotal, carImages };

  return { cars, pagesTotal };
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
  return await Car.distinct('cyl')
}

export default {
  getCars,
  getAllBrands,
  getModels,
  getSingleCar,
  getConditions,
  getTypes,
  getLocation,
  getDrives,
  getFuels,
  getCylinders
};
