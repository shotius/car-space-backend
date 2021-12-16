import { multerMemoryUpload } from 'utils/multer';
import customerReviewController from 'controllers/customer-review.controller';
import express from 'express';

const customerReviewRouter = express.Router();

customerReviewRouter.get('/', customerReviewController.getAllReviews);
customerReviewRouter.post(
  '/',
  multerMemoryUpload.array('photo[]', 4),
  customerReviewController.addReview
);

export default customerReviewRouter;
