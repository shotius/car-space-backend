import argon2 from 'argon2';
import express from 'express';
import { validate } from 'middlewares/validate';
import User from 'models/user.model';
import authServices from 'services/auth.services';
import { error, success, validation } from 'utils/functions/responseApi';
import logger from 'utils/logger';
import { loginValidations } from 'validation/LoginValidation';
import { isAuth } from './../utils/midlewares';

const authRouter = express.Router();

/** Login */
authRouter.post('/login', validate(loginValidations), async (req, res) => {
  const { username, password } = req.body;

  const { user, errors } = await authServices.loginUser({
    username,
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
        username: user.username,
      },
    })
  );
});

/**Register */
authRouter.post('/register', async (req, res) => {
  const body = req.body;

  let passwordHash;
  try {
    passwordHash = await argon2.hash(body.password);
  } catch (err) {
    return res.status(500).json({ error: 'uneble to hash the password' });
  }

  const user = new User({
    username: body.username,
    name: body.name,
    role: body.role,
    passwordHash,
  });

  let savedUser;
  try {
    savedUser = await user.save();
  } catch (error: any) {
    logger.error(error.message);
  }

  return res.json(savedUser);
});

/** Logout */
authRouter.get('/logout', async (req, res) => {
  delete req.session.user;
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    } else {
      // return res.send('removed session information');
      return res.clearCookie('uid', { path: '/' }).status(200).send('Ok.');
    }
  });
});

/**
 * if user is authenticated response response with user info
 */
authRouter.get('/me', isAuth, async (req, res) => {
  const user = req.session.user!;
  const { id: _id, ...response } = user;
  res.send(
    success({
      results: response,
    })
  );
});

export default authRouter;
