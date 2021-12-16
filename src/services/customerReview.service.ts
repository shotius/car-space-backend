import CustomerReview from 'models/customer-review.model';
import { INewReview } from '../../shared_with_front/types/types-shared';

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
  return { text, images, userId };
};

const customerReviewService = {
  getAllReviews,
  addReview,
};
export default customerReviewService;
