import userController from 'controllers/user.controller';
import express from 'express';
import { validate } from 'middlewares/validate';
import { isAdmin, isAuth } from './../utils/midlewares';
import { multerMemoryUpload } from './../utils/multer';
import { userMessage } from './../validation/userMessage';

const usersRouter = express.Router();

// middlewares
usersRouter.use(express.urlencoded({ extended: true }));
usersRouter.use('/uploads', express.static('dist/uploads'));

/** Get user  */
usersRouter.get('/', isAuth, isAdmin, userController.getUserPaginated);

/** Dealers list */
usersRouter.get('/dealers', userController.getDealers);

/** Get all users */
usersRouter.get('/search', userController.searchUsers);

/** User likes a vehicle */
usersRouter.post('/like', isAuth, userController.likeCar);

/** Car ids of all favourite vehicles */
usersRouter.get('/favourites/carIds', isAuth, userController.getFavouriteIds);

/** Favourite cars */
usersRouter.get('/favourites/cars', isAuth, userController.getFavouriteCars);

/**
 * Set user avatar
 */
usersRouter.post(
  '/avatar',
  isAuth,
  multerMemoryUpload.single('profile-avatar'),
  userController.setUserAvatar
);

/** Undelete user when register is activated */
usersRouter.get('/undelete/:userid', userController.undeleteUser);

/** Send contanct info */
usersRouter.post(
  '/sendMessage',
  validate(userMessage),
  userController.sendContactEmail
);

/** Reset users */
// usersRouter.get(
//   '/reset/reset-all-users',
//   isAuth,
//   isAdmin,
//   userController.resetUsers
// );

export default usersRouter;
