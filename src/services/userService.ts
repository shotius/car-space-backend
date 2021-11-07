import argon2 from 'argon2';
import { Request } from 'express';
import { Document } from 'mongoose';
import { SessionUser } from 'types';
import { IUser, LoginParams, UserResponse } from '../../shared_with_front/types/types-shared';
import User from '../models/user';
import { getBooks } from '../utils/fileScraper';

const startScrape = async () => {
  try {
    return await getBooks();
  } catch (error) {
    return false;
  }
};

const getUsers = async (): Promise<IUser[]> => {
  const users = await User.find({});
  return users;
};

//** User service starts from here */

// login user
const loginUser = async ({
  username,
  password,
}: LoginParams): Promise<UserResponse> => {
  const user = await User.findOne({ username: username });

  if (!user) {
    return {
      errors: [
        {
          param: 'username',
          msg: 'username does not exist',
        },
      ],
    };
  }

  const passwordIsCorrect =
    user === null ? null : await argon2.verify(user.passwordHash, password);

  if (!passwordIsCorrect) {
    return {
      errors: [
        {
          param: 'password',
          msg: 'password is incorrect',
        },
      ],
    };
  }

  return { user };
};

// add user session
const addUserSession = (
  req: Request,
  user: IUser & Document<any, any, IUser>
): SessionUser => {
  const sessionUser: SessionUser = {
    username: user.username,
    isAuthenticated: true,
    role: user.role,
    id: user._id,
  };

  req.session.user = sessionUser;
  return sessionUser;
};

export default {
  getUsers,
  startScrape,
  loginUser,
  addUserSession,
};
