import express, { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { validate } from 'middlewares/validate';
import cloudinaryServices from 'services/cloudinary.service';
import userService from 'services/user.service';
import { asyncHandler } from 'utils/functions/asyncHandler';
import imageMethods from 'utils/functions/imageTranformsFuncts';
import { success } from 'utils/functions/responseApi';
import { sendEmail } from 'utils/functions/sendMail';
import typeParser from 'utils/functions/typeParsers';
import { isAuth } from 'utils/midlewares';
import {
  ApiSuccessResponse,
  CloudinaryResponse
} from '../../shared_with_front/types/types-shared';
import { ApiError } from './../utils/functions/ApiError';
import { multerMemoryUpload } from './../utils/multer';
import { userMessage } from './../validation/userMessage';
import { getCallMePleaseView } from './../views/callMePleaseView';

const usersRouter = express.Router();

// middlewares
usersRouter.use(express.urlencoded({ extended: true }));
usersRouter.use('/uploads', express.static('dist/uploads'));

// get all users
usersRouter.get(
  '/',
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const searchWord = typeParser.parseString(req.query.s);
    const users = await userService.getUsers(searchWord);
    if (!users) {
      return next(new ApiError(httpStatus.NOT_FOUND, 'Could not get users'));
    }
    return res.send(
      success({
        results: users,
      })
    );
  })
);

// user likes a vehicle
usersRouter.post(
  '/like',
  isAuth,
  asyncHandler(async (req: Request, res: Response) => {
    const userId = req.session.user!.id;
    const carId = req.body.carId;

    const savedCar = await userService.likeCar({
      userId,
      carId,
    });

    return res.send(
      success({
        message: 'Ok',
        results: savedCar,
      })
    );
  })
);

/**
 * @returns: lotNUmber of all favourite vehicles
 */
usersRouter.get(
  '/favourites/carIds',
  isAuth,
  asyncHandler(async (req: Request, res: Response) => {
    const id = req.session.user!.id;
    const carIds = await userService.getFavouriteCarIds(id);

    if (!carIds) {
      return res.status(500).end();
    }
    return res.send(
      success({
        results: carIds,
      })
    );
  })
);

/**
 * @returns user favourite cars
 */
usersRouter.get(
  '/favourites/cars',
  isAuth,
  asyncHandler(async (req: Request, res: Response) => {
    const id = req.session.user!.id;
    const user = await userService.getUserWithFavouriteCars(id.toString());
    return res.send(
      success({
        results: user?.favourites,
      })
    );
  })
);

/**
 * Set user avatar
 */
usersRouter.post(
  '/avatar',
  isAuth,
  multerMemoryUpload.single('profile-avatar'),
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    if (!req.file) {
      return res.send('files not provied');
    }

    const { buffer } = req.file;

    // get user from the session
    const userid = req.session.user!.id;
    if (!userid) {
      return next(
        new ApiError(
          httpStatus.NETWORK_AUTHENTICATION_REQUIRED,
          'not authorized'
        )
      );
    }

    // compress the image and converto webp format
    const sharpBuffer = await imageMethods.toWebp({ buffer });
    // upload image to the cloudinary
    const result = await cloudinaryServices.uploadStream(
      sharpBuffer,
      `users/avatars`
    );

    if (result.message === 'Fail') {
      return next(
        new ApiError(httpStatus.INTERNAL_SERVER_ERROR, '' + result.error)
      );
    }

    if (!result.url) {
      return next(
        new ApiError(
          httpStatus.INTERNAL_SERVER_ERROR,
          'Cloudinary did not return url'
        )
      );
    }

    await userService.changeProfilePicture(userid, result.url);

    const response: ApiSuccessResponse<CloudinaryResponse> = {
      results: result,
      success: true,
    };

    return res.send(response);
  })
);

usersRouter.get('/undelete/:userid', async (req, res) => {
  const id = req.params.userid;
  const user = await userService.undelete(id);
  return res.json({
    user,
  });
});

usersRouter.post('/sendMessage', validate(userMessage), async (req, res) => {
  const { message, phone, name, link } = req.body;

  const text = getCallMePleaseView({ message, phone, name, link });

  await sendEmail({
    to: 'carspace77@gmail.com',
    text,
    subject: 'Message From Customer',
  });

  res.send(
    success({
      message: 'Success',
      results: true,
    })
  );
});

// usersRouter.get(
//   '/reset/reset-all-users',
//   isAuth,
//   isAdmin,
//   async (_req, res) => {
//     const user = await User.deleteMany({});
//     return res.json({
//       user,
//     });
//   }
// );

export default usersRouter;
