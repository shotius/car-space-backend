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
import { success } from 'utils/functions/responseApi';
import { next } from 'cheerio/lib/api/traversing';

const getBlogs = asyncHandler(
  async (_req: Request, res: Response, next: NextFunction) => {
    const allBlogs = await Blogs.find();
    return res.send(success({ results: allBlogs, message: 'all blogs' }));
  }
);

const postBlog = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const rawBlog = req.body;

    if (!req.file) {
      return next(new ApiError(httpStatus.BAD_REQUEST, 'no file detected'));
    }

    const imgUrl = await cloudinaryServices.fileToUrl(req.file);

    if (imgUrl.error) {
      return next(imgUrl.error);
    }

    const newBlog = new blogModel({ ...rawBlog, img: imgUrl.url });

    await newBlog.save();

    return res.send(success({ results: newBlog, message: 'created' }));
  }
);

const udpateBlogById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const newDetails = parseBlogBody(req.body);

    if (req.file) {
      const { url, error } = await cloudinaryServices.fileToUrl(req.file);
      if (error) {
        return next(error);
      }
      if (url) {
        newDetails.img = url;
      }
    }

    const newBlog = await blogsServices.udpateBlogById(id, newDetails);

    return res.send(success({ results: newBlog, message: 'blog has updated' }));
  }
);

const deleteBlogById = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  const blog = await blogsServices.deleteBlogById(id);
  return res.send(success({ results: blog, message: 'blog deleted' }));
});

const getBlogById = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  const blog = await blogsServices.getBlogById(id);
  return res.send(success({ results: blog, message: 'single blog' }));
});

const getRandomBlogs = asyncHandler(async (req: Request, res: Response) => {
  const limit = req.params.limit || 3
  const blogs = await blogsServices.getRandomBlogs(+limit);
  return res.send(success({ results: blogs }));
});

const blogController = {
  getBlogs,
  postBlog,
  deleteBlogById,
  udpateBlogById,
  getBlogById,
  getRandomBlogs,
};

export default blogController;
