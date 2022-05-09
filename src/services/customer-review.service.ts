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
  return await CustomerReview.find({}).populate('user', {fullName: 1, avatar: 1})
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
    user: user._id 
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
    const response = await cloudinaryServices.deleteMultiple(rev.photos);

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
    const response = await cloudinaryServices.deleteMultiple(review.photos);

    if (response.message === 'Fail' && response.error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, response.error);
    }
  }

  return review;
};

const undelete = async (id: string) => {
  return await CustomerReview.updateOne(
    { _id: id },
    {
      $set: { expireAt: new Date('9999-05-18T16:00:00Z') },
    }
  );
};

const singleReview = async (id: string) => {
  return await CustomerReview.findOne({ _id: id });
};

const customerReviewService = {
  getAllReviews,
  addReview,
  clearReviews,
  clearSingleReview,
  undelete,
  singleReview,
};
export default customerReviewService;
