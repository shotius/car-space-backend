import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import { bufferStream } from 'utils/functions/bufferStream';
dotenv.config();

interface CloudinaryResponse {
  message: 'Success' | 'Fail';
  error?: string;
  url?: string;
}

// this is base url on the cloud
const baseFolderonCloudinary = 'car-space';

if (typeof process.env.CLOUDINARY_URL === 'undefined') {
  console.warn('!! cloudinary config is undefined !!');
  console.warn('export CLOUDINARY_URL or set dotenv file');
} else {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });
}

/**
 *
 * @param localFilePath : this is a file locaiton on the machine
 * @param fileFolder : this is sub folder in the cloud
 * @returns : error message or success message with images url
 */
export const uploadToCloudinary = async (
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
export const uploadStreamCloudinary = async (
  buffer: Buffer,
  folder: string
) => {
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
