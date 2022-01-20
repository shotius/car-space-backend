import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import cloudinaryServices from 'services/cloudinary.service';
import userService from 'services/user.service';
import { asyncHandler } from 'utils/functions/asyncHandler';
import imageMethods from 'utils/functions/imageTranformsFuncts';
import { success } from 'utils/functions/responseApi';
import { sendEmail } from 'utils/functions/sendMail';
import typeParser from 'utils/functions/typeParsers';
import { getCallMePleaseView } from 'views/callMePleaseView';
import {
  ApiSuccessResponse,
  CloudinaryResponse,
} from '../../shared_with_front/types/types-shared';
import { ApiError } from './../utils/functions/ApiError';

/** Get all users */
const getAllUsers = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
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
  }
);

/** Like car */
const likeCar = asyncHandler(async (req: Request, res: Response) => {
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
});

/** Get user favourite ids */
const getFavouriteIds = asyncHandler(async (req: Request, res: Response) => {
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
});

/** Get all User favourite cars */
const getFavouriteCars = asyncHandler(async (req: Request, res: Response) => {
  const id = req.session.user!.id;
  const user = await userService.getUserWithFavouriteCars(id.toString());
  return res.send(
    success({
      results: user?.favourites,
    })
  );
});


/** Set User avatar */
const setUserAvatar = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
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
  }
);

/** After user activates account, user's ttl will be exptended */
const undeleteUser = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.userid;
  const user = await userService.undelete(id);
  return res.json({
    user,
  });
});

/** Send contact mail to the admin */
const sendContactEmail = asyncHandler(async (req: Request, res: Response) => {
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

/** Reset all users */
const resetUsers = asyncHandler(async (_req: Request, res: Response) => {
  const user = await userService.resetUsers();
  return res.json({
    user,
  });
});

/**Exports */
const userController = {
  getAllUsers,
  likeCar,
  getFavouriteIds,
  getFavouriteCars,
  setUserAvatar,
  undeleteUser,
  sendContactEmail,
  resetUsers,
};

export default userController;
