import CarImages from 'models/carImages';

const getImages = async () => {
  const images = await CarImages.find({}).limit(15);
  return images;
};

// param: lotNumber
// result: carImage
const getMediumImages = async (lotNumber: number) => {
  try {
    const images = await CarImages.find({ objectId: lotNumber });

    let links: any = {};
    // get all links from the image sequence
    if (images.length) {
      images.forEach((img) => {
        img.lotImages.forEach((lot, k) => {
          links[k] = lot.link.find(
            (l) => l.isThumbNail === false && l.isHdImage === false
          )?.url;
        });
      });
    } else {
      return null;
    }
    return  Object.values(links).slice(0, 5)
  } catch (error) {
    throw new Error('Could not get Images for a car');
  }
};

export default {
  getImages,
  getMediumImages,
};
