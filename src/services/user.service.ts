import { removeExtension } from './../utils/functions/removeExtension';
import { deleteOnCloudinary } from 'utils/cloudinary/cloudinary';
import { IUser } from '../../shared_with_front/types/types-shared';
import User from '../models/user.model';

/**
 * @returns : list of users
 */
const getUsers = async (): Promise<IUser[]> => {
  const users = await User.find({});
  return users;
};

interface likeCarProps {
  userId: number;
  carId: string;
}

/**
 * @param id
 * @returns IUser
 */
const getUser = async (id: string): Promise<IUser | null> => {
  const user = await User.findById(id);
  return user;
};

/**
 * @param userId
 * @param lotNumber
 * @returns success or error
 */
const likeCar = async ({ userId, carId }: likeCarProps) => {
  const user = await User.findById(userId);

  if (!user) {
    return { error: `user not found` };
  }

  // if car is in favourites remove, else add it in it
  if (user.favourites.includes(carId)) {
    user.favourites = user.favourites.filter((el) => el !== carId);
  } else {
    user.favourites = user.favourites.concat(carId);
  }

  // tidy
  user.favourites = user.favourites.filter((fav) => fav);

  const savedUser = await user.save();
  return savedUser;
};

/**
 * @param userId
 * @returns : return lot numbers of favourite cars
 */
const getFafouriteCars = async (userId: number) => {
  const user = await User.findById(userId);
  if (!user) {
    return null;
  }
  return user.favourites;
};

/**
 *
 * @param userId
 * @param avatar : cloudinary url for user avatar
 * @returns true if there no error
 */
const changeProfilePicture = async (userId: number, avatar: string) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }

  // remove existing avatar from cloudinary
  if (user.avatar) {
    // get public id from the url
    const public_id = removeExtension(user.avatar).slice(
      user.avatar.indexOf('car-space/')
    );
    const isDeleted = await deleteOnCloudinary(public_id);
    if (isDeleted.message === 'Fail') {
      throw new Error(isDeleted.error);
    }
  }

  user.avatar = avatar;

  try {
    await user.save();
    return true;
  } catch (error) {
    throw new Error(`Error saving user avatar : ${error}`);
  }
};

export default {
  getUsers,
  likeCar,
  getFafouriteCars,
  getUser,
  changeProfilePicture,
};
