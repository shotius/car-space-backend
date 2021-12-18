import authController from 'controllers/auth.controller';
import express from 'express';
import { validate } from 'middlewares/validate';
import { loginValidations } from 'validation/LoginValidation';
import { isAuth } from './../utils/midlewares';

const authRouter = express.Router();

/** Login */
authRouter.post('/login', validate(loginValidations), authController.login);

/**Register */
authRouter.post('/register', authController.register);

/** Logout */
authRouter.get('/logout', authController.logout);

/** Me */
authRouter.get('/me', isAuth, authController.me);

export default authRouter;
