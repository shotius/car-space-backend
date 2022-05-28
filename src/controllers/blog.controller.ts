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

const udpateBlogById = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  const newDetails = parseBlogBody(req.body);
  let imgUrl: string | undefined;
  if (req.file) {
    const response = await cloudinaryServices.fileToUrl(req.file);
    imgUrl = response.url || newDetails.img;
  }
  const newBlog = await blogsServices.udpateBlogById(id, {
    ...newDetails,
    img: imgUrl,
  });

  return res.send(success({ results: newBlog, message: 'blog has updated' }));
});

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

const blogController = {
  getBlogs,
  postBlog,
  deleteBlogById,
  udpateBlogById,
  getBlogById,
};

export default blogController;
