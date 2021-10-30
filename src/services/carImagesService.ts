import CarImages from 'models/carImages'

const getImages = async () => {
  const images = await CarImages.find({}).limit(15)
  return images
}

export default {
 getImages
};
