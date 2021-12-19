import { mongoId } from './../validation/mongoId';
import { multerMemoryUpload } from 'utils/multer';
import customerReviewController from 'controllers/customer-review.controller';
import express from 'express';
import { validate } from 'middlewares/validate';
import { newReview } from 'validation/newReview';

const customerReviewRouter = express.Router();

customerReviewRouter.get('/', customerReviewController.getAllReviews);
customerReviewRouter.get('/test/:id', customerReviewController.test);
customerReviewRouter.get('/:id', customerReviewController.singleReview);
customerReviewRouter.post(
  '/',
  multerMemoryUpload.array('photo[]', 4),
  validate(newReview), 
  customerReviewController.addReview
);
customerReviewRouter.delete('/', customerReviewController.clearReviews);
customerReviewRouter.delete(
  '/:reviewId',
  validate(mongoId),
  customerReviewController.clearSingleReview
);



export default customerReviewRouter;
