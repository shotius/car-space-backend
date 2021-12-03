import { ICarImages } from 'types';
import CarImages from 'models/carImages.model';

const getImages = async () => {
  const images = await CarImages.find({}).limit(15);
  return images;
};

/**
 *
 * @param lotNumbers
 * @returns: returns images of lot numbers
 */
const parseMediums = (images: ICarImages): string[] => {
  let links: any = {};
  // get all links from the image sequence
  images.lotImages.forEach((lot, k) => {
    links[k] = lot.link.find(
      (l) => l.isThumbNail === false && l.isHdImage === false
    )?.url;
  });
  return Object.values(links).slice(0, 5) as string[];
};

/**
 * @param {string[]}: lot numbers
 * @return: medium car image
 */
const getMedimImagesList = async (lotNumbers: number[]) => {
  const result: Record<string, string[]> = {};
  // get images for all lot numbers
  const images = await CarImages.find({ objectId: { $in: lotNumbers } });
  // iterate and fill the object back
  for (let img of images) {
    result[img.objectId] = parseMediums(img);
  }
  return result;
};

/**
 * @param: lotNumber
 * @return: carImage
 */
const getMediumImages = async (lotNumber: number) => {
  try {
    const images = await CarImages.findOne({ objectId: lotNumber });
    if (!images) {
      return null;
    }
    return parseMediums(images);
  } catch (error) {
    throw new Error('Could not get Images for a car');
  }
};

/**
 * @param: lotnumber
 * @returns: list of thumbs
 */
const getThumbs = async (lotNumber: number) => {
  try {
    const images = await CarImages.find({ objectId: lotNumber });

    let links: any = {};

    if (images.length) {
      images.forEach((img) => {
        img.lotImages.forEach((lot, k) => {
          links[k] = lot.link.find((l) => l.isThumbNail === true)?.url;
        });
      });
    } else {
      return null;
    }
    return Object.values(links).slice(0, 5);
  } catch (error) {
    throw new Error('Could not get Thumbs for a car');
  }
};

export default {
  getImages,
  getMediumImages,
  getThumbs,
  getMedimImagesList,
};
