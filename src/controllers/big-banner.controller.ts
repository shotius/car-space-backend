import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import bigBannerService from 'services/big-banner.service';
import cloudinaryServices from 'services/cloudinary.service';
import imageMethods from 'utils/functions/imageTranformsFuncts';
import { success } from 'utils/functions/responseApi';
import { ApiError } from './../utils/functions/ApiError';
import { asyncHandler } from './../utils/functions/asyncHandler';

/** Get all banners */
const getBanners = asyncHandler(async (_req: Request, res: Response) => {
  const banners = await bigBannerService.getBanners();
  res.send(success({ results: banners }));
});

/** Add a banner */
const addBanner = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    if (!req.file) {
      return next(new ApiError(httpStatus.BAD_REQUEST, 'banner not provided'));
    }

    const place = req.body.place || 1;
    const { buffer } = req.file;

    const bannerWebpBuffer = await imageMethods.toWebp({ buffer });

    const cloudinaryResponse = await cloudinaryServices.uploadStream(
      bannerWebpBuffer,
      'banners'
    );

    if (cloudinaryResponse.message === 'Fail') {
      return next(
        new ApiError(
          httpStatus.INTERNAL_SERVER_ERROR,
          'Failed to upload image on cloudinary'
        )
      );
    }

    if (!cloudinaryResponse.url) {
      return next(
        new ApiError(
          httpStatus.INTERNAL_SERVER_ERROR,
          'cloudinary did not returned url'
        )
      );
    }

    const dbResponse = await bigBannerService.addBanner(
      cloudinaryResponse.url,
      parseInt(place)
    );

    res.send(success({ results: dbResponse }));
  }
);

/** Detele a banner */
const deleteBannerById = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;

  await bigBannerService.deleteBannerById(id);

  res.send(success({ results: true, message: 'deleted' }));
});

const bigBannerController = {
  getBanners,
  addBanner,
  deleteBannerById,
};

export default bigBannerController;
