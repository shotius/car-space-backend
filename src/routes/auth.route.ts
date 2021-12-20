import { registerParams } from './../validation/registerParams';
import authController from 'controllers/auth.controller';
import express from 'express';
import { validate } from 'middlewares/validate';
import { loginValidations } from 'validation/LoginValidation';
import { isAuth } from './../utils/midlewares';
import { verificationView } from 'views/verificationView';

const authRouter = express.Router();

/** Login */
authRouter.post('/login', validate(loginValidations), authController.login);

/**Register */
authRouter.post('/register', validate(registerParams), authController.register);

authRouter.get('/verify', (_req, res) => {
  res.send(verificationView({ hash: 'hash', fullName: 'shoutius' }));
});

/** Logout */
authRouter.get('/logout', authController.logout);

/** isAuth */
authRouter.get('/isAuth/');
/** Me */
authRouter.get('/me', isAuth, authController.me);

export default authRouter;
