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


export default {
  getUsers,
  startScrape,
};
