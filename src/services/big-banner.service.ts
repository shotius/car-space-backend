import cloudinaryServices from 'services/cloudinary.service';
import Banner from 'models/big-banner.model';
import { ApiError } from 'utils/functions/ApiError';
import httpStatus from 'http-status';

const addBanner = async (img: string, place: number) => {
  const newBanner = new Banner({ img, place });
  return await newBanner.save();
};

const getBanners = async () => {
  return await Banner.find({});
};

const deleteBannerById = async (id: string) => {
  const banner = await Banner.findByIdAndRemove(id);

  // remove image from cloudinary
  if (banner) {
    const cloudinaryRes = await cloudinaryServices.deleteSingle(banner.img);

    if (cloudinaryRes.message === 'Fail' && cloudinaryRes.error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, cloudinaryRes.error);
    }
  }

  return banner
};

/** Exports */
const bigBannerService = {
  addBanner,
  getBanners,
  deleteBannerById,
};

export default bigBannerService;
