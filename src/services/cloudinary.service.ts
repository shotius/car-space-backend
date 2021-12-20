import { logger } from 'utils/logger';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import fs from 'fs';
import { bufferStream } from 'utils/functions/bufferStream';
import imageMethods from 'utils/functions/imageTranformsFuncts';
import { removeExtension } from 'utils/functions/removeExtension';
import { CloudinaryResponse } from '../../shared_with_front/types/types-shared';
dotenv.config();

// this is base url on the cloud
const baseFolderonCloudinary = 'car-space';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

/**
 *
 * @param localFilePath : this is a file locaiton on the machine
 * @param fileFolder : this is sub folder in the cloud
 * @returns : error message or success message with images url
 */
const uploadPhoto = async (
  localFilePath: string,
  fileFolder: string
): Promise<CloudinaryResponse> => {
  const pathFolders = localFilePath.split('/');
  const fileName = pathFolders.slice(pathFolders.length - 1);

  const filePathOnCloud = `${baseFolderonCloudinary}/${fileFolder}/${fileName}`;

  try {
    const result = await cloudinary.uploader.upload(localFilePath, {
      public_id: filePathOnCloud,
    });
    fs.unlinkSync(localFilePath);
    return {
      message: 'Success',
      url: result.url,
    };
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return {
      message: `Fail`,
      error: `error on cloudinary upload file ${error}`,
    };
  }
};

/**
 * Function uploads image to the cloudinary server using promisified stream
 * @param buffer : this is buffer of compressed image
 * @param folder : this is a folder under main folder on the cloud
 * @returns : {message: success | Fail, url?: result url, error?: error}
 */
const uploadStream = async (buffer: Buffer, folder: string) => {
  return new Promise<CloudinaryResponse>((resolve, reject) => {
    const path = `${baseFolderonCloudinary}/${folder}`;

    const stream = cloudinary.uploader.upload_stream(
      {
        folder: path,
      },
      (error, result) => {
        if (result) {
          resolve({
            message: 'Success',
            url: result.secure_url,
          });
        } else {
          reject({
            message: 'Fail',
            error: error,
          });
        }
      }
    );
    // write post strem
    bufferStream(buffer).pipe(stream);
  });
};

/**
 * Function deletes image from the Cloudinary storage
 * @param public_id : image uri
 * @returns {CloudinaryResponse}
 */
const deleteSingle = async (public_id: string): Promise<CloudinaryResponse> => {
  try {
    const result = await cloudinary.uploader.destroy(public_id);
    if (result.result === 'not found') {
      return {
        message: 'Fail',
        error: 'Could not delete the the image:  ' + public_id,
      };
    }
    return {
      message: 'Success',
    };
  } catch (error) {
    return {
      message: 'Fail',
      error: `Failed to remove url: ${public_id} from cloudinary. ${error}`,
    };
  }
};

/**
 * Function removes list of urls from the cloudinbary
 * @param urls list of cloudinary urls
 * @returns
 */
const deleteMultiple = async (urls: string[]): Promise<CloudinaryResponse> => {
  try {
    urls.map(async (url) => {
       await deleteSingle(url);
    });
    return {
      message: 'Success',
    };
  } catch (error) {
    return {
      message: 'Fail',
      error: '' + error,
    };
  }
};

/**
 * Function uploads multy file to the cloudinary
 * @param files in memory files, created by multer
 * @param path file path on cloudinary
 * @returns image urls
 */
const uploadMultyStream = async (
  files: Express.Multer.File[],
  path: string
) => {
  let imgUrls: string[] = [];

  const requests = files.map(async (file) => {
    const { buffer } = file;
    const convertedBuffer = await imageMethods.toWebp({ buffer });
    return cloudinaryServices.uploadStream(convertedBuffer, path);
  });

  const cloudResponses = await Promise.allSettled(requests);

  imgUrls = cloudResponses.map((res) => {
    if (res.status === 'fulfilled') {
      return res.value.url || '';
    } else {
      return '';
    }
  });

  logger.info('cloudinary: ', cloudResponses);

  return imgUrls;
};

const getPublicPath = (url: string) => {
  return removeExtension(url).slice(url.indexOf('car-space/'));
};

const cloudinaryServices = {
  getPublicPath, 
  deleteSingle,
  uploadStream,
  uploadPhoto,
  uploadMultyStream,
  deleteMultiple,
};

export default cloudinaryServices;
