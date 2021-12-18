import { ApiError } from 'utils/functions/ApiError';
import User from 'models/user.model';
import { Request } from 'express';
import {
  IUser,
  LoginParams,
  RegisterParams,
  SessionUser,
  UserResponse,
} from '../../shared_with_front/types/types-shared';
import argon2 from 'argon2';
import { Document } from 'mongoose';
import httpStatus from 'http-status';

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
 * FUnction adds user
 * @param params register params
 * @returns
 */
const register = async ({
  fullName,
  email,
  phone,
  role,
  password,
}: RegisterParams): Promise<UserResponse> => {
  const newUser = new User({
    fullName,
    email,
    phone,
    role,
    passwordHash: password,
  });

  try {
    const savedUser = await newUser.save();
    return { user: savedUser };
  } catch (error: any) {
    // if mongo complains about unique email
    if (error.code === 11000) {
      return {
        errors: [
          {
            param: 'email',
            msg: `email already taken`,
          },
        ],
      };
    } else {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, '' + error);
    }
  }
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
    fN: user.fullName,
    r: user.role,
    id: user._id,
  };

  req.session.user = sessionUser;
  return sessionUser;
};

export default {
  loginUser,
  addUserSession,
  register,
};
