import express from 'express';
import carImagesService from 'services/carImages.service';
import carsServices from 'services/cars.services';
import userService from 'services/user.service';
import sharp from 'sharp';
import { uploadStreamCloudinary } from 'utils/cloudinary/cloudinary';
import { error } from 'utils/functions/responseApi';
import { isAuth } from 'utils/midlewares';
import { upload } from 'utils/multer';
import { multerMemoryUpload } from './../utils/multer';

const usersRouter = express.Router();

// middlewares
usersRouter.use(express.urlencoded({ extended: true }));
usersRouter.use('/uploads', express.static('dist/uploads'));

// get all users
usersRouter.get('/', async (_req, res) => {
  res.json(await userService.getUsers());
});

// user likes a vehicle
usersRouter.post('/like', isAuth, async (req, res) => {
  const body = req.body;

  const lotNumber = String(body.lotNumber);
  const { user } = req.session;

  const id = user?.id;

  if (!id) {
    // this is for typescript, because here we know that id exists
    return;
  }

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
});

/**
 * @return: lotNUmber of all favourite vehicles
 */
usersRouter.get('/lots/favourites', isAuth, async (req, res) => {
  const { user } = req.session;
  const id = user?.id;

  if (!id) {
    return res.status(401).end();
  }

  const result = await userService.getFafouriteCars(id);

  if (!result) {
    return res.status(500).end();
  }

  return res.send(result);
});

// return cars and favourite images
usersRouter.get('/cars/favourites', isAuth, async (req, res) => {
  const { user } = req.session;
  const id = user?.id;

  if (!id) {
    return res.status(401).end();
  }

  const lotNumbers = await userService.getFafouriteCars(id);

  if (!lotNumbers) {
    return res.status(401).send(
      error({
        message: 'error while fetching lot numbers',
      })
    );
  }

  // get cars
  const cars = await carsServices.getCarsFromLotNumbers(lotNumbers);
  // console.log(cars);

  // get images
  const lotNs = lotNumbers.map((lot) => parseInt(lot));
  const images = await carImagesService.getMedimImagesList(lotNs);

  // asign images to cars
  for (let car of cars) {
    car.imgsM = images[car.lN];
  }

  return res.send(cars);
});

/**
 * Set user avatar
 */
usersRouter.post(
  '/avatar',
  isAuth,
  multerMemoryUpload.single('avatar'),
  async (req, res) => {
    if (!req.file) {
      return res.send('files not provied');
    }

    const { buffer } = req.file;

    const userid = userService.getIdFromSession(req.session);

    // compress the image
    const sharpBuffer = await sharp(buffer).webp({ quality: 10 }).toBuffer();
    // upload image to the cloudinary
    const result = await uploadStreamCloudinary(sharpBuffer, `users/avatars`);

    if (result.message === 'Fail') {
      throw new Error(result.error);
    }

    if (!result.url) {
      throw new Error('Cloudinary did not return url');
    }

    await userService.addProfilePicture(userid, result.url);

    return res.json({
      result,
    });
  }
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
