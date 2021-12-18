import { IUser } from '../../shared_with_front/types/types-shared';
import User from '../models/user.model';
import { Types } from 'mongoose';
import cloudinaryServices from './cloudinary.service';

/**
 * @returns : list of users
 */
const getUsers = async (searchWord: string): Promise<IUser[]> => {
  const users = await User.find({
    fullName: { $regex: searchWord, $options: 'i' },
  }).limit(20);
  return users;
};

interface likeCarProps {
  userId: number;
  carId: Types.ObjectId;
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
 * Funtion returns the user with populated favourites
 * @param id userId
 * @returns user
 */
const getUserWithFavouriteCars = async (id: string) => {
  const user = await User.findById(id).populate('favourites');
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
    user.favourites = user.favourites.filter(
      (el) => el.toString() !== carId.toString()
    );
  } else {
    user.favourites = user.favourites.concat(carId);
  }

  // tidy
  user.favourites = user.favourites.filter((fav) => fav);

  const savedUser = await user.save();
  if (!savedUser) {
    return null;
  }
  return savedUser;
};

/**
 * @param userId
 * @returns : return lot numbers of favourite cars
 */
const getFavouriteCarIds = async (userId: number) => {
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
    const public_id = cloudinaryServices.getPublicPath(user.avatar);
    const isDeleted = await cloudinaryServices.deleteSingle(public_id);
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


const userService = {
  getUsers,
  likeCar,
  getFavouriteCarIds,
  getUser,
  changeProfilePicture,
  getUserWithFavouriteCars,
};

export default userService