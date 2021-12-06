import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
dotenv.config();

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

export const uploadToCloudinary = async (localFilePath: string, fileFolder: string) => {
  const baseFolder = 'car-space'
  const pathFolders = localFilePath.split('/')
  const fileName = pathFolders.slice(pathFolders.length - 1 )

  const filePathOnCloud = `${baseFolder}/${fileFolder}/${fileName}`;

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
    return { message: `Fail upload on Cloudinary: ${error}` };
  }
};
