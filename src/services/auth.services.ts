import argon2 from 'argon2';
import { Request } from 'express';
import httpStatus from 'http-status';
import User from 'models/user.model';
import { Document } from 'mongoose';
import { randomString } from 'utils/functions/randomString';
import { sendEmail } from 'utils/functions/sendMail';
import { verificationView } from 'views/verificationView';
import {
  IUser,
  LoginParams,
  RegisterParams,
  SessionUser,
  UserResponse,
} from '../../shared_with_front/types/types-shared';
import { ApiError } from './../utils/functions/ApiError';
import verificationService from './user-verification.service';

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
  const user = await User.findOne({ email });

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

  if (!user.verified) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      `Email: ${user.email} is not verified`
    );
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

const forgetPassword = async (email: string): Promise<UserResponse> => {
  const user = await User.findOne({ email });
  if (!user) {
    return {
      errors: [
        {
          param: 'email',
          msg: 'Email does not exists',
        },
      ],
    };
  }


  return { user };
};

/**
 * Function sends email for verification
 * @param user newly created user
 * @returns hash document
 */
const sendVerificationEmail = async (user: IUser) => {
  // create hash for verification
  const hash = randomString(24);
  await verificationService.addHash({
    hash,
    userId: user.id,
  });

  // send varifictation email
  try {
    await sendEmail({
      to: user.email,
      email: verificationView({ fullName: user.fullName, hash }),
    });
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Cound not sent the verification email ' + error
    );
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
  sendVerificationEmail,
  forgetPassword
};
