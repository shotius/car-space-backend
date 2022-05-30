import { Request, Response } from 'express';
import { parseTranportation } from 'utils/functions/parseTranportation';
import Transportation from 'models/transportation.model';
import { asyncHandler } from 'utils/functions/asyncHandler';

import { error, success, validation } from 'utils/functions/responseApi';
import { ITransportDataObject } from '../../shared_with_front/types/types-shared';
import transportationService from 'services/transportation.service';

const getAllTransportation = asyncHandler(
  async (_req: Request, res: Response) => {
    const data = await Transportation.find();
    return res.send(success({ results: data }));
  }
);

const addNewTransportation = asyncHandler(
  async (req: Request, res: Response) => {
    const tranportationData = parseTranportation(req.body);
    const results = await transportationService.addNew(tranportationData);
    return res.send(success({ results }));
  }
);

const addBatchedTransportation = asyncHandler(
  async (req: Request, res: Response) => {
    const transportation: ITransportDataObject[] = req.body;
    const results = await transportationService.addBatch(transportation);
    return res.send(success({ results }));
  }
);

const updateById = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  const newTransportation = parseTranportation(req.body);
  const results = await transportationService.updateById({
    ...newTransportation,
    id,
  });
  return res.send(success({ results }));
});

const deleteById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const results = await transportationService.deleteById(id);
  return res.send(success({ results }));
});

const transportationController = {
  getAllTransportation,
  addNewTransportation,
  addBatchedTransportation,
  deleteById,
  updateById,
};

export default transportationController;
