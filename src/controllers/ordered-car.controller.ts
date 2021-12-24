import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import orderedCarService from 'services/ordered-car.service';
import { asyncHandler } from 'utils/functions/asyncHandler';
import { success } from 'utils/functions/responseApi';
import { ApiError } from './../utils/functions/ApiError';
import { parseNewOrderedCar } from './../utils/functions/parseNewOrderedCar';

// -- Get all orders
const getOrderedCars = asyncHandler(async (_req: Request, res: Response) => {
  const results = await orderedCarService.getOrderCars();
  res.send(
    success({
      results,
    })
  );
});

// -- Add a car
const addCar = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const props = parseNewOrderedCar(req.body);

    const savedCar = await orderedCarService.addCar(props);

    if (!savedCar) {
      return next(
        new ApiError(
          httpStatus.INTERNAL_SERVER_ERROR,
          'Could not Create an order'
        )
      );
    }

    return res.send(
      success({
        message: 'Order Placed successfully',
        results: savedCar,
      })
    );
  }
);

// -- Get a single car
const getSingleCar = asyncHandler(async (req: Request, res: Response) => {
  const { carId } = req.params;

  const car = await orderedCarService.getOrderedCar(carId);

  res.send(car);
});

const updateCar = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const carParams = parseNewOrderedCar(req.body);
    const id = req.params.carId;

    const updatedCar = await orderedCarService.updateCar({ id, ...carParams });

    if (!updatedCar) {
      return next(
        new ApiError(
          httpStatus.INTERNAL_SERVER_ERROR,
          'Could not update the car'
        )
      );
    }

    res.send(
      success({
        message: 'Successfull updated car',
        results: updatedCar,
      })
    );
  }
);

const orderedCarController = {
  getOrderedCars,
  addCar,
  getSingleCar,
  updateCar,
};

export default orderedCarController;
