import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import cloudinaryServices from 'services/cloudinary.service';
import customerReviewService from 'services/customer-review.service';
import { asyncHandler } from 'utils/functions/asyncHandler';
import { success } from 'utils/functions/responseApi';
import typeParser from 'utils/functions/typeParsers';
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

// -- Add Review
const addReview = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const parsedInput = parseNewCustomerReview(req.body);
    const files = req.files;

    // if files ar provided upload them to cloudinary
    if (Array.isArray(files) && files.length) {
      parsedInput.images = await cloudinaryServices.uploadMultyStream(
        files,
        'customer-reviews-photos'
      );
    }

    // add customer review to the db
    const newReview = await customerReviewService.addReview(parsedInput);

    if (!newReview) {
      return next(
        new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'could not add a review')
      );
    }

    return res.send(
      success({
        results: {
          newReview,
        },
      })
    );
  }
);

// -- Removes single Review
const clearSingleReview = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const reviewId = typeParser.parseString(req.params.reviewId);

    if (!reviewId) {
      return next(
        new ApiError(httpStatus.BAD_REQUEST, 'review Id not provided')
      );
    }

    await customerReviewService.clearSingleReview(reviewId);


    return res.send(
      success({
        message: `customer with id ${reviewId} is deleted`,
        results: [],
      })
    );
  }
);

// -- Removes all Reviews
const clearReviews = asyncHandler(async (_req: Request, res: Response) => {
  await customerReviewService.clearReviews();
  res.send(success({
    message: 'cleared', 
    results: []
  }));
});

const customerReviewController = {
  getAllReviews,
  addReview,
  clearReviews,
  clearSingleReview
};

export default customerReviewController;
