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
    avatar: user.avatar
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
};
export default authController;
