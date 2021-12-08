import { removeExtension } from './../utils/functions/removeExtension';
import { Session } from 'express-session';
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
  lotNumber: string;
}

interface likeCarProps {}

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
const likeCar = async ({ userId, lotNumber }: likeCarProps) => {
  const user = await User.findById(userId);

  if (!user) {
    return { error: `car with '${lotNumber}' not found` };
  }

  // if car is in favourites remove, else add it in it
  if (user.favourites.includes(lotNumber)) {
    user.favourites = user.favourites.filter((el) => el !== lotNumber);
  } else {
    user.favourites = user.favourites.concat(lotNumber);
  }

  try {
    await user.save();
    return { success: true };
  } catch (error) {
    return { error };
  }
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

/**
 * Function extracts id from session
 * @param session : express session
 * @returns : id of user
 */
const getIdFromSession = (session: Session): number => {
  const { user } = session;
  const id = user?.id;
  if (!id) {
    throw new Error('not authenticated')
  }
  return id;
};

export default {
  getUsers,
  likeCar,
  getFafouriteCars,
  getUser,
  changeProfilePicture,
  getIdFromSession,
};
