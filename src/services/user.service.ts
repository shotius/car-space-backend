import httpStatus from 'http-status';
import { Types } from 'mongoose';
import { Roles } from '../../shared_with_front/contants';
import { IUser } from '../../shared_with_front/types/types-shared';
import User from '../models/user.model';
import { IUserBase } from './../../shared_with_front/types/types-shared.d';
import { ApiError } from './../utils/functions/ApiError';
import { logger } from './../utils/logger';
import cloudinaryServices from './cloudinary.service';
import { ChangePasswordProps } from './types';

/**
 * @description Function returns paginated user list
 * @param page
 * @param limit
 * @returns list of users
 */
const getUsers = async (page: number, limit: number) => {
  const startFrom = (page - 1) * limit;
  return await User.find({}, { favourites: 0, orderedCars: 0, expiresAt: 0 })
    .skip(startFrom)
    .limit(limit);
};

const getUserCount = async () => {
  return await User.find().countDocuments();
};

/**
 * @description funtion uses search word to search users
 * @returns : list of users
 */
const searchUsers = async (searchWord: string): Promise<IUser[]> => {
  const users = await User.find({
    fullName: { $regex: searchWord, $options: 'i' },
  })
    .populate('orderedCars')
    .limit(20);
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

const getUserByEmail = async (email: string) => {
  return await User.findOne({ email });
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

  // clean up
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
    const isDeleted = await cloudinaryServices.deleteSingle(user.avatar);
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

const undelete = async (id: string) => {
  return await User.findByIdAndUpdate(id, {
    $set: { expiresAt: new Date('9999-05-18T16:00:00Z'), verified: true },
  });
};

/**
 * Function changes user password
 * @param id
 * @param password
 * @returns updated user
 */
const changePassword = async ({
  userId,
  passwordHash,
}: ChangePasswordProps) => {
  return await User.findByIdAndUpdate(userId, { passwordHash }, { new: true });
};

/**
 *
 * @param userId
 * @returns {Promise<IUser>} with order list
 */
const getUserWithOrders = async (userId: string) => {
  return await User.findById(userId).populate('orderedCars');
};

/**
 *  Get dealers
 * @description function returns 4 dealers if query is provided else max 10 dealers
 * @param withCars query
 *
 */
const getDealers = async (withCars: boolean) => {
  return await User.find({
    role: Roles.DEALER,
    addedCars: withCars
      ? { $exists: true, $not: { $size: 0 } }
      : { $exists: true },
  })
    .populate('addedCars')
    .limit(withCars ? 4 : 100);
};

/** Function adds car in dealers' car */
const addCarToDealer = async ({
  carId,
  dealerId,
}: {
  carId: Types.ObjectId;
  dealerId: string;
}) => {
  const dealer = await User.findById(dealerId);
  // if dealer not found return
  if (!dealer) {
    return null;
  }

  dealer.addedCars.push(carId);
  return await dealer.save();
};

const removeCarFromDealer = async ({
  carId,
  dealerId,
}: {
  carId: Types.ObjectId;
  dealerId: string;
}) => {
  const dealer = await User.findById(dealerId);

  if (!dealer) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      'Dealer not found to remove a his/her car'
    );
  }

  dealer.addedCars = dealer.addedCars.filter(
    (ids) => ids.toString() !== carId.toString()
  );
  logger.info(dealer.addedCars);
  await dealer.save();

  return dealer;
};

/** Danger remove all user from the database */
const resetUsers = async () => {
  return await User.deleteMany({});
};

const getAllUsers = async () => {
  return await User.find().select(['-favourites', '-expiresAt']);
};

const getUserById = async (id: string) => {
  return await User.findById(id);
};

const updateUserById = async (id: string, user: Partial<IUserBase>) => {
  return await User.findByIdAndUpdate(id, user, { new: true });
};

const deleteUserById = async (id: string) => {
  return await User.findByIdAndRemove(id);
};

//** exports */
const userService = {
  getUserWithOrders,
  removeCarFromDealer,
  addCarToDealer,
  getDealers,
  searchUsers,
  changePassword,
  getUserByEmail,
  likeCar,
  getUsers,
  getFavouriteCarIds,
  getUser,
  changeProfilePicture,
  getUserWithFavouriteCars,
  undelete,
  resetUsers,
  getUserCount,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};

export default userService;
