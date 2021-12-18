import argon2 from 'argon2';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import User from 'models/user.model';
import authServices from 'services/auth.services';
import { ApiError } from 'utils/functions/ApiError';
import { asyncHandler } from 'utils/functions/asyncHandler';
import { error, success, validation } from 'utils/functions/responseApi';

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

  return res.send(
    success({
      results: {
        role: user.role.toLowerCase(),
        isAuthenticated: true,
        fullName: user.fullName,
      },
    })
  );
});

// -- Register
const register = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    let passwordHash;
    try {
      passwordHash = await argon2.hash(body.password);
    } catch (err) {
      return next(
        new ApiError(
          httpStatus.INTERNAL_SERVER_ERROR,
          'uneble to hash the password'
        )
      );
    }

    const user = new User({
      fullName: body.fullName,
      email: body.email,
      passwordHash,
      phone: body.phone,
      role: body.role,
    });

    let savedUser;
    savedUser = await user.save();

    return res.json(savedUser);
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
const me = asyncHandler(async (req: Request, res: Response) => {
  const user = req.session.user!;
  const { id: _id, ...response } = user;
  res.send(
    success({
      results: response,
    })
  );
});

const authController = {
  login,
  register,
  logout,
  me,
};
export default authController;
