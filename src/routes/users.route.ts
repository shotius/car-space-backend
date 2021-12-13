import express, { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import carImagesService from 'services/carImages.service';
import carServices from 'services/cars.services';
import userService from 'services/user.service';
import { uploadStreamCloudinary } from 'utils/cloudinary/cloudinary';
import { asyncHandler } from 'utils/functions/asyncHandler';
import { toWebp } from 'utils/functions/imageTranformsFuncts';
import { error } from 'utils/functions/responseApi';
import { isAuth } from 'utils/midlewares';
import { upload } from 'utils/multer';
import {
  ApiSuccessResponse,
  CloudinaryResponse,
} from '../../shared_with_front/types/types-shared';
import { ApiError } from './../utils/functions/ApiError';
import { multerMemoryUpload } from './../utils/multer';
import { success } from 'utils/functions/responseApi';

const usersRouter = express.Router();

// middlewares
usersRouter.use(express.urlencoded({ extended: true }));
usersRouter.use('/uploads', express.static('dist/uploads'));

// get all users
usersRouter.get('/', async (_req, res) => {
  res.json(await userService.getUsers());
});

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
 * @return: lotNUmber of all favourite vehicles
 */
usersRouter.get(
  '/lots/favourites',
  isAuth,
  asyncHandler(async (req: Request, res: Response) => {
    const id = req.session.user!.id;
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
    const id = req.session.user!.id;
    const lotNumbers = await userService.getFafouriteCars(id);

    if (!lotNumbers) {
      return res.status(401).send(
        error({
          message: 'error while fetching lot numbers',
        })
      );
    }

    // get cars
    const cars = await carServices.getCarsFromLotNumbers(lotNumbers);

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
  if (!req.files || !req.files.length) {
    return res.send('failed');
  }
  for (var i = 0; i < req.files?.length; i++) {
    //@ts-ignore
    response += `<img src="${req.files[i].path}" /><br>`;
  }

  return res.send(response);
});

// usersRouter.get('/reset', isAuth, async  (req, res) => {
//   const id = req.session.user!.id
//   const user = await User.findById(id)
//   if (user) {
//     user.favourites = []
//     await user.save()
//   }
//   return res.json({
//     id, user
//   })
// })

export default usersRouter;
