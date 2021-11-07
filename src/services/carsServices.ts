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

const getAllBrands = async () => {
  const brands = await Car.distinct('m');
  return brands;
};

const getModels = async (brand: string) => {
  const models = await Car.find({ m: brand }).distinct('mD');
  return models;
};

const getSingleCar = async (lotNumber: string) => {
  return Car.find({ lN: lotNumber });
};

export default {
  getCars,
  getAllBrands,
  getModels,
  getSingleCar,
};
