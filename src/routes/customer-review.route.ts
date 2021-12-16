import customerReviewController from 'controllers/customer-review.controller';
import express from 'express';

const customerReviewRouter = express.Router();

customerReviewRouter.get('/', customerReviewController.getAllReviews);
customerReviewRouter.post('/', (_req, res) => {
  res.send('post is ok');
});

export default customerReviewRouter;
