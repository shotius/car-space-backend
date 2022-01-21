import Banner from 'models/big-banner.model';

const addBanner = async (img: string, place: number) => {
  const newBanner = new Banner({ img, place });
  return await newBanner.save();
};

const getBanners = async () => {
  return await Banner.find({});
};

const deleteBannerById = async (id: string) => {
  return await Banner.findByIdAndRemove(id);
};

/** Exports */
const bigBannerService = {
  addBanner,
  getBanners,
  deleteBannerById
};

export default bigBannerService;
