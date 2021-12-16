import { ApiError } from './../utils/functions/ApiError';
import CustomerReview from 'models/customer-review.model';
import User from 'models/user.model';
import { INewReview } from '../../shared_with_front/types/types-shared';
import httpStatus from 'http-status';

/**
 * @returns all CustomerReviews
 */
const getAllReviews = async () => {
  return await CustomerReview.find({});
};

/**
 * Function adds new review
 * @param {string} content  of the review
 * @param {string[]} images urls of the images
 * @param {string} userId id of the user who posted the review
 * @returns created post
 */
const addReview = async ({ text, images, userId }: INewReview) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  const newReview = new CustomerReview({
    photos: images,
    review: text,
    user: user.id,
  });

  const addedReview = await newReview.save();
  return addedReview;
};

const clearReviews = async () => {
  return await CustomerReview.deleteMany({});
};

const clearSingleReview = async (id: string) => {
  return await CustomerReview.findByIdAndDelete(id);
};

const customerReviewService = {
  getAllReviews,
  addReview,
  clearReviews,
  clearSingleReview,
};
export default customerReviewService;
