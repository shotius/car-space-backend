import { DOMAIN } from './../utils/constants';
import { ApiError } from './../utils/functions/ApiError';
import userService from 'services/user.service';
import {
  LoginResponse,
  MeResponse,
  RegisterResponse,
  RoleTypes,
} from './../../shared_with_front/types/types-shared.d';
import argon2 from 'argon2';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import authServices from 'services/auth.services';
import { asyncHandler } from 'utils/functions/asyncHandler';
import { error, success, validation } from 'utils/functions/responseApi';
import { parserRegisterParams } from 'utils/functions/parseRegisterParams';
import typeParser from 'utils/functions/typeParsers';
import logger from 'utils/logger';
import ServerGlobal from 'config/ServerGlobal';
import { randomString } from 'utils/functions/randomString';
import { FORGET_PASSWORD_PREFIX } from 'utils/constants';
import { sendEmail } from 'utils/functions/sendMail';

const redis = ServerGlobal.getInstance().redis;

// -- Login
const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { user, errors } = await authServices.loginUser({
    email,
    password,
  });

  // if login is not successful return errors
  if (errors) {
    return res.status(422).json(
      validation({
        errors: errors,
      })
    );
  }

  // if user not received while login
  if (!user) {
    return res.send(
      error({
        message: 'user is not received from login service',
      })
    );
  }

  // set session
  authServices.addUserSession(req, user);

  const results: LoginResponse = {
    role: user.role.toLowerCase() as RoleTypes,
    isAuthenticated: true,
    fullName: user.fullName,
    phone: user.phone,
    avatar: user.avatar,
  };

  return res.send(
    success({
      results,
    })
  );
});

// -- Register an user
const register = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { password, ...registerParams } = parserRegisterParams(req.body);

    let passwordHash;
    // hash provided password
    try {
      passwordHash = await argon2.hash(password);
    } catch (err) {
      return next(
        new ApiError(
          httpStatus.INTERNAL_SERVER_ERROR,
          'uneble to hash the password'
        )
      );
    }

    // register user in a service
    const { errors, user } = await authServices.register({
      password: passwordHash,
      ...registerParams,
    });

    // if there are any valudation errors during registration
    if (errors) {
      return res.status(422).send(
        validation({
          errors,
        })
      );
    }

    // if for some reason user is not returned from service
    if (!user) {
      return next(
        new ApiError(
          httpStatus.INTERNAL_SERVER_ERROR,
          'User is not created or it is not retured from servied'
        )
      );
    }

    // send verification email
    await authServices.sendVerificationEmail(user);

    // response
    const registeredUser: RegisterResponse = {
      fullName: user.fullName,
      email: user.email,
    };

    return res.send(
      success({
        results: registeredUser,
        message: 'User registered successfully',
      })
    );
  }
);

// -- Forgot Password
const forgtoPassword = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const email = typeParser.parseString(req.body.email);

    logger.info(email);

    const user = await userService.getUserByEmail(email);

    if (!user) {
      return next(
        new ApiError(
          httpStatus.NOT_FOUND,
          'User with provided email does not exists'
        )
      );
    }

    // I save hash and user imail in the redis for 2 hours
    // when request come of the change password I will validate user
    // by his/her id and hash I gave
    const hash = randomString(24);

    // save userid with hash
    await redis.set(FORGET_PASSWORD_PREFIX + hash, user.id, 'ex', 60 * 60 * 2); // valid for 2 hours.

    // send mail to the user
    await sendEmail({
      to: email,
      subject: 'Password Recovery',
      text: `
      <a href="${DOMAIN}/change-password/${hash}">Change your password here</a>
    `,
    });

    return res.send(
      success({
        message: 'Password recovery link is sent on your email',
        results: email,
      })
    );
  }
);

// -- Change password
const changePassword = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { hash, password } = req.body;

    const userId = await redis.get(FORGET_PASSWORD_PREFIX + hash);

    if (!userId) {
      return next(new ApiError(httpStatus.BAD_REQUEST, 'token is outdated'));
    }

    // hash the password
    const passwordHash = await argon2.hash(password);

    // change user document in database
    const user = await userService.changePassword({ userId, passwordHash });

    if (!user) {
      return next(
        new ApiError(
          httpStatus.INTERNAL_SERVER_ERROR,
          'Somethind went wrong. Could not update the user passwrod'
        )
      );
    }

    res.send(
      success({
        message: `Password is changed for ${user.fullName}`,
        results: user,
      })
    );
  }
);

// -- Logout
const logout = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    delete req.session.user;
    req.session.destroy((err) => {
      if (err) {
        return next(
          new ApiError(httpStatus.INTERNAL_SERVER_ERROR, err.message)
        );
      } else {
        // return res.send('removed session information');
        return res.clearCookie('uid', { path: '/' }).status(200).send('Ok.');
      }
    });
  }
);

// -- Me
const me = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = req.session.user!;
    const foundUser = await userService.getUser(user.id.toString());

    // user of provieded id not found
    if (!foundUser) {
      return next(
        new ApiError(
          httpStatus.NETWORK_AUTHENTICATION_REQUIRED,
          'not authenticated'
        )
      );
    }

    // constucr response
    const response: MeResponse = {
      id: foundUser.id,
      fullName: foundUser.fullName,
      email: foundUser.email,
      phone: foundUser.phone,
      role: foundUser.role,
      avatar: foundUser.avatar,
    };

    return res.send(
      success({
        results: response,
      })
    );
  }
);

const authController = {
  login,
  register,
  logout,
  me,
  forgtoPassword,
  changePassword,
};
export default authController;
