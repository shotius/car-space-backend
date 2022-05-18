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

  getCarById = async (carId: string) => {
    return await this.Model.findById(carId);
  };

  getTransmissions = async () => {
    return await this.Model.distinct('trans');
  };

  getFuels = async () => {
    return await this.Model.distinct('fuel');
  };

  getCylinders = async () => {
    return await this.Model.distinct('cyl');
  };

  getDrives = async () => {
    return await this.Model.distinct('dr');
  };

  removeAllCars = async () => {
    return await this.Model.deleteMany({});
  };

  getLocations = async () => {
    return await this.Model.distinct('lC');
  };

  getAllBrands = async () => {
    return await this.Model.distinct('m');
  };

  getTypes = async () => {
    return await this.Model.distinct('bSt');
  };

  // Get all distinct damage and secondary damage conditions
  getConditions = async () => {
    const conditions = await Promise.all([
      this.Model.distinct('dmg'),
      this.Model.distinct('sDmg'),
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

  getModels = async (brands: string[]) => {
    const models = await this.Model.aggregate([
      { $match: { m: { $in: brands } } },
      { $group: { _id: '$m', models: { $addToSet: '$mG' } } },
      { $project: { _id: 0, brand: '$_id', models: '$models' } },
    ]);
    return models;
  };

  /**Get last 4 cars */
  getRecentCars = async () => {
    return await this.Model.find().sort({ _id: -1 }).limit(4);
  };
}
