import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import customerReviewService from 'services/customerReview.service';
import { asyncHandler } from 'utils/functions/asyncHandler';
import { success } from 'utils/functions/responseApi';
import { ApiError } from './../utils/functions/ApiError';
import { parseNewCustomerReview } from './../utils/functions/parseNewCustomerReview';

// -- Returns all the customer reviews
const getAllReviews = asyncHandler(
  async (_req: Request, res: Response, next: NextFunction) => {
    const reviews = await customerReviewService.getAllReviews();
    if (!reviews) {
      return next(new ApiError(httpStatus.NOT_FOUND, 'Reviews not found'));
    }
    return res.send(
      success({
        results: reviews,
      })
    );
  }
);

const addReview = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const parsedInput = parseNewCustomerReview(req.body);

    const files = req.files

    const newReview = await customerReviewService.addReview(parsedInput);
    if (!newReview) {
      return next(
        new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'could not add a review')
      );
    }

    if (!files) {
      return next()
    }

    return res.send(success({
      results: {newReview, file: files.length}
    }));
  }
);

const customerReviewController = {
  getAllReviews,
  addReview,
};

export default customerReviewController;
