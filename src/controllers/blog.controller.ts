import { asyncHandler } from './../utils/functions/asyncHandler';
import { Response, NextFunction, Request } from 'express';
import Blogs from 'models/blog.model';
import httpStatus from 'http-status';
import blogModel from 'models/blog.model';
import cloudinaryServices from 'services/cloudinary.service';
import { ApiError } from 'utils/functions/ApiError';
import imageMethods from 'utils/functions/imageTranformsFuncts';

const getBlogs = asyncHandler(
  async (_req: Request, res: Response, next: NextFunction) => {
    const allBlogs = await Blogs.find();

    return res.send(allBlogs);
  }
);

const postBlog = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const rawBlog = req.body;

    if (!req.file) {
      return res.send('no file detected');
    }

    const { buffer } = req.file!;

    const blogWebpbuffer = await imageMethods.toWebp({ buffer });

    const cloudinaryResponse = await cloudinaryServices.uploadStream(
      blogWebpbuffer,
      'blogs'
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
          'Could not get saved images url from cloudinary'
        )
      );
    }

    const newBlog = new blogModel({ ...rawBlog, img: cloudinaryResponse.url });

    await newBlog.save();
    return res.json(newBlog);
  }
);

const blogController = {
  getBlogs,
  postBlog,
};

export default blogController;
