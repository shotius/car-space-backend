import Car from 'models/car';
import { IUser } from '../../shared_with_front/types/types-shared';
import User from '../models/user';
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

interface likeCarProps {

}

// user likes vehicle
const likeCar = async ({ userId, lotNumber }: likeCarProps) => {
  const user = await User.findById(userId);
  const car = await Car.findOne({ lN: lotNumber });

  if (!user) {
    return { error: `car with '${lotNumber}' not found` };
  }

  if (!car) {
    return { car: 'not found' };
  }

  // if car is in favourites remove, else add it in it
  if (user.favourites.includes(lotNumber)) {
    user.favourites = user.favourites.filter((el) => el !== lotNumber);
  } else {
    user.favourites = user.favourites.concat(lotNumber);
  }

  try {
    const res = await user.save();
    console.log('res', res)
    return { success: true };
  } catch (error) {
    return { error };
  }
};

const getFafouriteCars = async (userId: number) => {
  const user = await User.findById(userId);
  if (!user) {
    return null
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
};
