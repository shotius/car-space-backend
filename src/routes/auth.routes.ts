import authController from 'controllers/auth.controller';
import express from 'express';
import { validate } from 'middlewares/validate';
import { loginValidations } from 'validation/LoginValidation';
import { isAuth } from '../utils/midlewares';
import { newPassword } from '../validation/changePassword';
import { forgotPassword } from '../validation/forgotPassword';
import { registerParams } from '../validation/registerParams';

const authRouter = express.Router();

/** Login */
authRouter.post('/login', validate(loginValidations), authController.login);

/**Register */
authRouter.post('/register', validate(registerParams), authController.register);

/**Forgot Password */
authRouter.post(
  '/forgot-password',
  validate(forgotPassword),
  authController.forgtoPassword
);

authRouter.post(
  '/change-password',
  validate(newPassword),
  authController.changePassword
);

/** Logout */
authRouter.get('/logout', authController.logout);

/** isAuth */
authRouter.get('/isAuth');

/** Me */
authRouter.get('/me', isAuth, authController.me);

export default authRouter;
