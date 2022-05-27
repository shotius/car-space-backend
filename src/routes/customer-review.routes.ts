import { mongoId } from '../validation/mongoId';
import { multerMemoryUpload } from 'utils/multer';
import controller from 'controllers/customer-review.controller';
import express from 'express';
import { validate } from 'middlewares/validate';
import { newReview } from 'validation/newReview';

const customerReviewRouter = express.Router();

customerReviewRouter.get('/', controller.getAllReviews);
customerReviewRouter.get('/test/:id', controller.test);
customerReviewRouter.get('/:id', controller.singleReview);

customerReviewRouter.post(
  '/',
  multerMemoryUpload.array('photo[]', 4),
  validate(newReview),
  controller.addReview
);

customerReviewRouter.delete('/', controller.clearReviews);
customerReviewRouter.delete(
  '/:reviewId',
  validate(mongoId),
  controller.clearSingleReview
);

export default customerReviewRouter;
