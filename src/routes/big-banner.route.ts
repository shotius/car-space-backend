import bigBannerController from 'controllers/big-banner.controller';
import express from 'express';
import { multerMemoryUpload } from 'utils/multer';

const bannerRouter = express.Router();

/** Get all banners */
bannerRouter.get('/', bigBannerController.getBanners);

/** Add Banner */
bannerRouter.post(
  '/',
  multerMemoryUpload.single('banner'),
  bigBannerController.addBanner
);

/** Delete banner */
bannerRouter.delete('/:id', bigBannerController.deleteBannerById);

export default bannerRouter;
