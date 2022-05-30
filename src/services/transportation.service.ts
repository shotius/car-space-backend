import Transportation from 'models/transportation.model';
import {
  IBaseTransportationObject,
  ITransportDataObject,
} from '../../shared_with_front/types/types-shared';

const getAll = async () => {
  return await Transportation.find();
};

const updateById = async (transportation: ITransportDataObject) => {
  return await Transportation.findByIdAndUpdate(
    transportation.id,
    transportation,
    { new: true }
  );
};

const deleteById = async (id: string) => {
  return await Transportation.findByIdAndRemove(id);
};

const addNew = async (transportation: IBaseTransportationObject) => {
  const newTransportation = new Transportation(transportation);
  const saved = await newTransportation.save();
  return saved;
};

const addBatch = async (transportations: IBaseTransportationObject[]) => {
  transportations.forEach(async (transportation) => {
    await addNew(transportation);
  });
  return 
};


const transportationService = {
  getAll, 
  updateById, 
  deleteById, 
  addNew, 
  addBatch
}

export default transportationService

