import { ApiError } from './../utils/functions/ApiError';
import { Request, Response, NextFunction } from 'express';
import CustomerReview from 'models/customer-review.model';
import { asyncHandler } from 'utils/functions/asyncHandler';
import { success } from 'utils/functions/responseApi';
import httpStatus from 'http-status';

const getAllReviews = asyncHandler(
  async (_req: Request, res: Response, next: NextFunction) => {
    const reviews = await CustomerReview.find({});
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

const customerReviewController = {
  getAllReviews,
};

export default customerReviewController;
