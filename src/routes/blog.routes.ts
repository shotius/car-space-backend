import blogController from 'controllers/blog.controller';
import express from 'express';
import { multerMemoryUpload } from './../utils/multer';
const blogRouter = express.Router();

blogRouter.get('/', blogController.getBlogs);
blogRouter.get('/:id', blogController.getBlogById)

blogRouter.post(
  '/',
  multerMemoryUpload.single('cover'),
  blogController.postBlog
);

blogRouter.put('/:id', blogController.udpateBlogById);

blogRouter.delete('/:id', blogController.deleteBlogById);

export default blogRouter;
