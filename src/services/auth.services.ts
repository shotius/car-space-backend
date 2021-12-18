import User from 'models/user.model';
import { Request } from 'express';
import {
  IUser,
  LoginParams,
  SessionUser,
  UserResponse,
} from '../../shared_with_front/types/types-shared';
import argon2 from 'argon2';
import { Document } from 'mongoose';

/**
 * Function logs in a user
 * @param email
 * @param password
 * @returns
 */
const loginUser = async ({
  email,
  password,
}: LoginParams): Promise<UserResponse> => {
  const user = await User.findOne({ email: email });

  if (!user) {
    return {
      errors: [
        {
          param: 'email',
          msg: 'email does not exist',
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

/**
 * Function puts info in user session
 * @param req
 * @param user
 * @returns {SessionUser}
 */
const addUserSession = (
  req: Request,
  user: IUser & Document<any, any, IUser>
): SessionUser => {
  const sessionUser: SessionUser = {
    fullName: user.fullName,
    isAuthenticated: true,
    role: user.role,
    id: user._id,
    avatar: user.avatar,
  };

  req.session.user = sessionUser;
  return sessionUser;
};

export default {
  loginUser,
  addUserSession,
};
