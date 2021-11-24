import express from 'express';
import userService from 'services/user.service';
import { fileExists } from '../utils/fileExists';
import { error } from 'utils/functions/responseApi';

const usersRouter = express.Router();

// get all users
usersRouter.get('/', async (_req, res) => {
  res.json(await userService.getUsers());
});

// user likes a vehicle
usersRouter.post('/like', async (req, res) => {
  const body = req.body;

  const lotNumber = body.lotNumber as string
  const { user } = req.session;

  const id = user?.id;

  if (!id) {
    return res.status(401).send(
      error({
        message: 'user not authenticated',
      })
    );
  }

  if (!lotNumber) {
    return res.status(400).send(error({
      message: 'lotNumber was not provided to like a car'
    }))
  }

  const success = await userService.likeCar({userId: id, lotNumber: lotNumber})
  return res.json({success});
});

// user get all favourite vehicles
usersRouter.get('/favourites',async (req, res) => {
  const {user} = req.session
  const id = user?.id

  if (!id) {
    return res.status(401).end()
  }

  const result = await userService.getFafouriteCars(id)

  if (!result) {
    return res.status(500).end()
  }

  return res.send(result)
})

/** TO-DO move it from here */
usersRouter.get('/check', (_req, res) => {
  const exists = fileExists();
  if (exists) {
    res.send('exist');
  } else {
    res.send('not exists');
  }
});

usersRouter.get('/scrape', async (_req, res) => {
  const fileDownloaded = await userService.startScrape();
  if (!fileDownloaded) {
    res.send('file could not downloaded');
  }
  const exists = fileExists();
  if (exists) {
    res.send('file downloaded and it is found');
  } else {
    res.send('file Downloaded but could not find it');
  }
});

export default usersRouter;
