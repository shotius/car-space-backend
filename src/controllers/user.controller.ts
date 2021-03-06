import { parseUserBody } from './../utils/functions/parseUserBody';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import cloudinaryServices from 'services/cloudinary.service';
import userService from 'services/user.service';
import { asyncHandler } from 'utils/functions/asyncHandler';
import imageMethods from 'utils/functions/imageTranformsFuncts';
import { success } from 'utils/functions/responseApi';
import { sendEmail } from 'utils/functions/sendMail';
import typeParser from 'utils/functions/typeParsers';
import queryParser from 'utils/queryParsers/queryParser';
import { getCallMePleaseView } from 'views/callMePleaseView';
import {
  ApiSuccessResponse,
  CloudinaryResponse,
  IUser,
} from '../../shared_with_front/types/types-shared';
import { ApiError } from '../utils/functions/ApiError';

/** Get all users */
const searchUsers = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const searchWord = typeParser.parseString(req.query.s);
    const users = await userService.searchUsers(searchWord);
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

const getAllUsers = asyncHandler(async (req: Request, res: Response) => {
  const results = await userService.getAllUsers();
  return res.send(success({ results }));
});

const getUserPaginated = asyncHandler(async (req: Request, res: Response) => {
  const page = queryParser.asNumber(req.query, 'page') || 1;
  const limit = queryParser.asNumber(req.query, 'limit') || 30;

  const users = await userService.getUsers(page, limit);
  const totalUsers = await userService.getUserCount();

  const totalPages = Math.ceil(totalUsers / limit);

  res.send(success({ results: { users, totalPages } }));
});

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
      return next(new ApiError(httpStatus.BAD_REQUEST, 'Files not provided'));
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
    to: 'support@carspace.ge',
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

/** Get dealers */
const getDealers = asyncHandler(async (req: Request, res: Response) => {
  const withCars = queryParser.Bool(req.query, 'withCars') || false;
  const dealers = await userService.getDealers(withCars);
  return res.send(success({ results: dealers }));
});

/** Reset all users */
const resetUsers = asyncHandler(async (_req: Request, res: Response) => {
  const user = await userService.resetUsers();
  return res.json({
    user,
  });
});

const getUserById = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  const results = await userService.getUserById(id);
  return res.send(success({ results }));
});

const updateUserById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const parsedUser = parseUserBody(req.body);
    const foundUser = await userService.getUserById(id);

    if (!foundUser) {
      return next(
        new ApiError(
          httpStatus.NOT_FOUND,
          'user with specified id is not found'
        )
      );
    }

    const results = await userService.updateUserById(id, parsedUser);
    return res.send(success({ results }));
  }
);

const deleteUserById = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  const results = await userService.deleteUserById(id);
  return res.send(success({ results }));
});

/**Exports */
const userController = {
  searchUsers,
  likeCar,
  getDealers,
  getFavouriteIds,
  getFavouriteCars,
  setUserAvatar,
  undeleteUser,
  sendContactEmail,
  resetUsers,
  getUserPaginated,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};

export default userController;
