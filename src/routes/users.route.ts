import httpStatus from 'http-status';
import { ApiError } from './../utils/functions/ApiError';
import express, { NextFunction, Request, Response } from 'express';
import carImagesService from 'services/carImages.service';
import copartCarServices from 'services/cars-copart.services';
import userService from 'services/user.service';
import { uploadStreamCloudinary } from 'utils/cloudinary/cloudinary';
import { asyncHandler } from 'utils/functions/asyncHandler';
import { error } from 'utils/functions/responseApi';
import { isAuth } from 'utils/midlewares';
import { upload } from 'utils/multer';
import {
  ApiSuccessResponse,
  CloudinaryResponse,
} from '../../shared_with_front/types/types-shared';
import { multerMemoryUpload } from './../utils/multer';
import { toWebp } from 'utils/functions/imageTranformsFuncts';

const usersRouter = express.Router();

// middlewares
usersRouter.use(express.urlencoded({ extended: true }));
usersRouter.use('/uploads', express.static('dist/uploads'));

// get all users
usersRouter.get('/', async (_req, res) => {
  console.log('users');
  res.json(await userService.getUsers());
});

// user likes a vehicle
usersRouter.post(
  '/like',
  isAuth,
  asyncHandler(async (req: Request, res: Response) => {
    const id = userService.getIdFromSession(req.session);
    const lotNumber = String(req.body.lotNumber);

    if (!lotNumber) {
      return res.status(400).send(
        error({
          message: 'lotNumber was not provided to like a car',
        })
      );
    }

    const success = await userService.likeCar({
      userId: id,
      lotNumber: lotNumber,
    });
    return res.json({ success });
  })
);

/**
 * @return: lotNUmber of all favourite vehicles
 */
usersRouter.get(
  '/lots/favourites',
  isAuth,
  asyncHandler(async (req: Request, res: Response) => {
    const id = userService.getIdFromSession(req.session);
    const result = await userService.getFafouriteCars(id);

    if (!result) {
      return res.status(500).end();
    }
    return res.send(result);
  })
);

// return cars and favourite images
usersRouter.get(
  '/cars/favourites',
  isAuth,
  async (req: Request, res: Response) => {
    const id = userService.getIdFromSession(req.session);
    const lotNumbers = await userService.getFafouriteCars(id);

    if (!lotNumbers) {
      return res.status(401).send(
        error({
          message: 'error while fetching lot numbers',
        })
      );
    }

    // get cars
    const cars = await copartCarServices.getCarsFromLotNumbers(lotNumbers);
    // console.log(cars);

    // get images
    const lotNs = lotNumbers.map((lot) => parseInt(lot));
    const images = await carImagesService.getMedimImagesList(lotNs);

    // asign images to cars
    for (let car of cars) {
      car.imgsM = images[car.lN];
    }

    return res.send(cars);
  }
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
    const userid = userService.getIdFromSession(req.session);
    if (!userid) {
      return next(
        new ApiError(
          httpStatus.NETWORK_AUTHENTICATION_REQUIRED,
          'not authorized'
        )
      );
    }

    // compress the image and converto webp format
    const sharpBuffer = await toWebp(buffer);
    // upload image to the cloudinary
    const result = await uploadStreamCloudinary(sharpBuffer, `users/avatars`);

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

usersRouter.post('/upload-multi', upload.array('images', 10), (req, res) => {
  var response = '<a href="/">Home</a><br>';
  response += 'Files uploaded successfully.<br>';
  console.log('file: ', req.files);
  if (!req.files || !req.files.length) {
    return res.send('failed');
  }
  for (var i = 0; i < req.files?.length; i++) {
    //@ts-ignore
    response += `<img src="${req.files[i].path}" /><br>`;
  }

  return res.send(response);
});

export default usersRouter;
