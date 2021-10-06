// import { ICarImages } from './../types';
// import axios from 'axios';
import { ICar } from 'types';
import Car from '../models/car';

const getCars = async (
  page: number
): Promise<{ cars: ICar[]; pagesTotal: number }> => {
  // cars per page
  const perPage = 27;

  // total cars in the db
  const carsTotal = await Car.find({}).countDocuments();

  // total pages for pagination
  const pagesTotal = Math.floor(carsTotal / perPage);

  // how many cars to skip
  const startFrom = (page - 1) * perPage;

  // retrieve cars
  const cars = await Car.find({}).skip(startFrom).limit(perPage);

  // const ImagePromises = cars.map(async (car): Promise<ICarImages> => {
  //   const result = await axios
  //     .get(car.imgU)
  //     .then(({ data }) => data)
  //     .catch((err) => {
  //       if (err.response.status === 404) {
  //         return 'Car Images not found';
  //       }
  //       return 'Some Other error occured while fetching car images';
  //     });
  //     console.log(result);
  //   return result;
  // });

  // const Images = await Promise.all(ImagePromises)
  //   .then((data) => data)
  //   .catch((err) => err);

  return { cars, pagesTotal };
};

export default {
  getCars,
};
