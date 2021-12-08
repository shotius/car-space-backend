import { ICarDealer } from '../../shared_with_front/types/types-shared';
import { CarDealer } from '../models/car-dealer.model';

const getAllCars = async () => {
  return await CarDealer.find({})
}

const addCar = async (car: ICarDealer) => {
  const newCar = new CarDealer({
    m: 'string',
    bSt: 'string',
    dmg: 'string',
    sDmg: 'string',
    lC: 'string',
    od: 'string',
    cyl: 'string',
    dr: 'string',
    mG: 'string',
    mD: 'string',
    eng: 'string',
    trans: 'string',
    imgT: 'string',
    imgUrls: ['string', 'string'],
    y: 'string',
    fuel: 'string',
    keys: 'string',
    c: 'string',
    bin: 'string',
  });
  console.log(car);
  await newCar.save();
};

const dealerCarService = {
  addCar,
  getAllCars
};
export default dealerCarService;
