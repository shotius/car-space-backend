import express from 'express';
import userService from 'services/userService';
import { fileExists } from '../utils/fileExists';

const usersRouter = express.Router();

// get all users
usersRouter.get('/', async (_req, res) => {
  res.json(await userService.getUsers());
});



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
