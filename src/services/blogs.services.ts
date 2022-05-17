import cloudinaryServices from 'services/cloudinary.service';
import Blogs from 'models/blog.model';
import httpStatus from 'http-status';
import { ApiError } from 'utils/functions/ApiError';
import { IBlog } from '../../shared_with_front/types/types-shared';

const deleteBlogById = async (id: string) => {
  const blog = await Blogs.findByIdAndDelete(id);

  if (blog && blog.img) {
    const cloudinaryResponse = await cloudinaryServices.deleteSingle(blog.img);
    if (cloudinaryResponse.message === 'Fail' && cloudinaryResponse.error) {
      throw new ApiError(
        httpStatus.INTERNAL_SERVER_ERROR,
        cloudinaryResponse.error
      );
    }
  }

  return blog;
};

const udpateBlogById = async (id: string, propsToChange: Partial<IBlog>) => {
  return Blogs.findByIdAndUpdate(id, propsToChange, { new: true });
};

const getBlogById = (id: string) => {
  return Blogs.findById(id)
}

const blogsServices = {
  deleteBlogById,
  getBlogById, 
  udpateBlogById,
};

export default blogsServices;
