import controller from 'controllers/blog.controller';
import express from 'express';
import { multerMemoryUpload } from './../utils/multer';
const blogRouter = express.Router();

blogRouter.get('/', controller.getBlogs);
blogRouter.get('/random', controller.getRandomBlogs);
blogRouter.get('/:id', controller.getBlogById);

blogRouter.post('/', multerMemoryUpload.single('cover'), controller.postBlog);

blogRouter.put(
  '/:id',
  multerMemoryUpload.single('cover'),
  controller.udpateBlogById
);

blogRouter.delete('/:id', controller.deleteBlogById);

export default blogRouter;
