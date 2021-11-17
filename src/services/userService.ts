import Car from 'models/car';
import { IUser } from '../../shared_with_front/types/types-shared';
import User from '../models/user';
import { getBooks } from '../utils/fileScraper';

const startScrape = async () => {
  try {
    return await getBooks();
  } catch (error) {
    return false;
  }
};

//** User service starts from here */

const getUsers = async (): Promise<IUser[]> => {
  const users = await User.find({});
  return users;
};

interface likeCarProps {
  userId: number;
  lotNumber: string;
}
const likeCar = async ({ userId, lotNumber }: likeCarProps) => {
  const user = await User.findById(userId);
  const car = await Car.find({ lN: lotNumber });

  if (!user) {
    return { user: 'not found' };
  }

  if (!car.length) {
    return { car: 'not found' };
  }

  // if car id exists in the array remove, else add
  if (user && user.favourites) {
    if (user.favourites.includes(car[0]._id)) {
      user.favourites = user.favourites.filter((el) => el !== car[0]._id);
    } else {
      user.favourites = user.favourites.concat(car[0]._id);
    }

    try {
      await user.save();
      return {success: true}
    } catch (error) {
      return {error}
    }
    
  }

  return false;
};

const getFafouriteCars = async (userId: string) => {
  const user = await User.findById(userId);
  if (!user) {
    return { user: 'not found' };
  }
  return user.favourites;
};

export default {
  getUsers,
  startScrape,
  likeCar,
  getFafouriteCars,
};
