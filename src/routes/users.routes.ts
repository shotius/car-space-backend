import { isAdmin } from './../utils/midlewares';
import userController from 'controllers/user.controller';
import express from 'express';
import { validate } from 'middlewares/validate';
import { isAuth } from '../utils/midlewares';
import { multerMemoryUpload } from '../utils/multer';
import { userMessage } from '../validation/userMessage';

const usersRouter = express.Router();

// middlewares
usersRouter.use(express.urlencoded({ extended: true }));
usersRouter.use('/uploads', express.static('dist/uploads'));

/** Get user  */
usersRouter.get('/', isAdmin, userController.getUserPaginated);

usersRouter.get('/all', isAdmin, userController.getAllUsers);

/** Dealers list */
usersRouter.get('/dealers', isAdmin, userController.getDealers);

/** Get all users */
usersRouter.get('/search', isAdmin, userController.searchUsers);

/** Undelete user when register is activated */
usersRouter.get('/undelete/:userid', userController.undeleteUser);

/** Car ids of all favourite vehicles */
usersRouter.get('/favourites/carIds', isAuth, userController.getFavouriteIds);

/** Favourite cars */
usersRouter.get('/favourites/cars', isAuth, userController.getFavouriteCars);

usersRouter.get('/:id', isAdmin, userController.getUserById);

/**
 * Set user avatar
 */
usersRouter.post(
  '/avatar',
  isAuth,
  multerMemoryUpload.single('profile-avatar'),
  userController.setUserAvatar
);

/** User likes a vehicle */
usersRouter.post('/like', isAuth, userController.likeCar);

/** Send contanct info */
usersRouter.post(
  '/sendMessage',
  validate(userMessage),
  userController.sendContactEmail
);

isAdmin;

usersRouter.put('/:id', isAdmin, userController.updateUserById);
usersRouter.delete('/:id', isAdmin, userController.deleteUserById);

/** Reset users */
// usersRouter.get(
//   '/reset/reset-all-users',
//   isAuth,
//   isAdmin,
//   userController.resetUsers
// );

export default usersRouter;
