import sharp from 'sharp';

const getIndexToInsert = (url: string) => url.indexOf('upload/') + 7;

/**
 * Function transformts url to the blurd image
 * @param imgUrl
 * @returns blured img
 */
const toBlur = (imgUrl: string) => {
  const indexToInsert = getIndexToInsert(imgUrl);
  if (imgUrl) {
    return `${imgUrl.slice(
      0,
      indexToInsert
    )}w_200,h_200,c_limit,e_blur:400,o_90,b_black/${imgUrl.slice(
      indexToInsert
    )}`;
  } else {
    return '';
  }
};

/**
 * Function mutates cloudinary url to get thumb url
 * @param imgUrl
 * @returns thumbnail
 */

const toThumb = (imgUrl: string) => {
  const indexToInsert = getIndexToInsert(imgUrl);
  if (imgUrl) {
    return `${imgUrl.slice(
      0,
      indexToInsert
    )}c_thumb,w_200,g_face/${imgUrl.slice(indexToInsert)}`;
  } else {
    return '';
  }
};

/**
 * Function converts image file to the webp
 * @param buffer file buffer
 * @returns Buffer of the converted image
 */
const toWebp = async ({
  buffer,
  quality = 10,
}: {
  buffer: Buffer;
  quality?: number;
}) => {
  return await sharp(buffer).webp({ quality }).toBuffer();
};

const imageMethods = {
  toWebp,
  toThumb,
  toBlur,
};

export default imageMethods;
