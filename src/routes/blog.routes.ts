import cloudinaryServices from 'services/cloudinary.service';
import { multerMemoryUpload } from './../utils/multer';
import express from 'express';
import blogModel from 'models/blog.model';
import imageMethods from 'utils/functions/imageTranformsFuncts';
import httpStatus from 'http-status';
import { ApiError } from 'utils/functions/ApiError';
import blogController from 'controllers/blog.controller';
const blogRouter = express.Router();

blogRouter.post(
  '/',
  multerMemoryUpload.single('cover'),
  async (req, res, next) => {
    const rawBlog = req.body;

    if (!req.file) {
      return res.send('no file detected');
    }

    const { buffer } = req.file!;

    console.log('buffer', buffer);
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

    try {
      await newBlog.save();
      // return res.json(cloudinaryResponse);
      return res.json(newBlog);
    } catch (error) {
      return res.json(error);
    }
  }
);

blogRouter.get('/', blogController.getBlogs);

blogRouter.delete('/:id', async (req, res) => {
  await blogModel.findByIdAndDelete(req.params.id);
  res.send('blog deleted');
});

export default blogRouter;
