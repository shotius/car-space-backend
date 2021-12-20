import { logger } from 'utils/logger';
import { success } from 'utils/functions/responseApi';
import { Request, Response } from 'express';
import orderedCarService from 'services/ordered-car.service';
import { asyncHandler } from 'utils/functions/asyncHandler';

// -- Get all orders
const getOrders = asyncHandler(async (_req: Request, res: Response) => {
  const results = await orderedCarService.getOrders('');
  logger.info('results: ', results);
  res.send(
    success({
      results,
    })
  );
});

const orderedCarController = {
  getOrders,
};
export default orderedCarController;
