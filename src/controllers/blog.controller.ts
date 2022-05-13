import { asyncHandler } from './../utils/functions/asyncHandler';
import { Response, NextFunction, Request } from 'express';
import Blogs from 'models/blog.model';

const getBlogs = asyncHandler(
  async (_req: Request, res: Response, next: NextFunction) => {
    const allBlogs = await Blogs.find();

    return res.send(allBlogs);
  }
);

const blogController = {
  getBlogs,
};

export default blogController;
