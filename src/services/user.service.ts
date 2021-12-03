import { IUser } from '../../shared_with_front/types/types-shared';
import User from '../models/user.model';
import { getBooks } from '../utils/fileScraper';

//** User service starts from here */

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

const getFafouriteCars = async (userId: number) => {
  const user = await User.findById(userId);
  if (!user) {
    return null;
  }
  return user.favourites;
};

// TO-DO remove it from here
const startScrape = async () => {
  try {
    return await getBooks();
  } catch (error) {
    return false;
  }
};

export default {
  getUsers,
  startScrape,
  likeCar,
  getFafouriteCars,
  getUser,
};