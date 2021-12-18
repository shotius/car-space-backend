import { ApiError } from './../utils/functions/ApiError';
import CustomerReview from 'models/customer-review.model';
import User from 'models/user.model';
import { INewReview } from '../../shared_with_front/types/types-shared';
import httpStatus from 'http-status';
import cloudinaryServices from './cloudinary.service';

/**
 * @returns all CustomerReviews
 */
const getAllReviews = async () => {
  return await CustomerReview.find({}).populate('user');
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
    text: text,
    user: {
      fullName: user.fullName,
      avatar: user.avatar,
    },
  });

  const addedReview = await newReview.save();
  return addedReview;
};

const clearReviews = async () => {
  const reviews = await CustomerReview.find({});
  if (!reviews) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'reviews are not found'
    );
  }

  // remove revies and remove images
  reviews.map(async (rev) => {
    const paths = rev.photos.map((photo) =>
      cloudinaryServices.getPublicPath(photo)
    );
    const response = await cloudinaryServices.deleteMultiple(paths);
    if (response.message === 'Success') {
      await rev.delete();
    } else {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, '' + response.error);
    }
  });

  return reviews;
};

const clearSingleReview = async (id: string) => {
  const review = await CustomerReview.findByIdAndDelete(id);
  if (review) {
    const paths = review.photos.map((photo) =>
      cloudinaryServices.getPublicPath(photo)
    );

    const response = await cloudinaryServices.deleteMultiple(paths);
    if (response.message === 'Fail' && response.error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, response.error);
    }
  }
  return review;
};

const customerReviewService = {
  getAllReviews,
  addReview,
  clearReviews,
  clearSingleReview,
};
export default customerReviewService;
