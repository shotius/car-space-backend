import { parseBlogBody } from './../utils/functions/parseBlogBody';
import { asyncHandler } from './../utils/functions/asyncHandler';
import { Response, NextFunction, Request } from 'express';
import Blogs from 'models/blog.model';
import httpStatus from 'http-status';
import blogModel from 'models/blog.model';
import cloudinaryServices from 'services/cloudinary.service';
import { ApiError } from 'utils/functions/ApiError';
import imageMethods from 'utils/functions/imageTranformsFuncts';
import blogsServices from 'services/blogs.services';

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

const udpateBlogById = asyncHandler(async (req: Request, res: Response) => {
  const newDetails = parseBlogBody(req.body);
  const id = req.params.id;
  const newBlog = await blogsServices.udpateBlogById(id, newDetails);
  return res.send(newBlog);
});

const deleteBlogById = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  const blog = await blogsServices.deleteBlogById(id);
  return res.json(blog);
});

const getBlogById = asyncHandler(async( req: Request, res: Response) => {
  const id  = req.params.id
  const blog = await blogsServices.getBlogById(id)
  return res.json(blog)
})

const blogController = {
  getBlogs,
  postBlog,
  deleteBlogById,
  udpateBlogById,
  getBlogById
};

export default blogController;
