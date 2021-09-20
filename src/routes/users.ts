import argon2 from 'argon2';
import express from 'express';
import userService from 'services/userService';
import User from '../models/user';
import { fileExists } from '../utils/fileExists';
import logger from '../utils/logger';

const usersRouter = express.Router();

usersRouter.post('/register', async (req, res) => {
  const body = req.body;

  let passwordHash;
  try {
    passwordHash = await argon2.hash(body.password);
  } catch (err) {
    return res.status(500).json({ error: 'uneble to hash the password' });
  }

  const user = new User({
    username: body.username,
    name: body.name,
    role: body.role,
    passwordHash,
  });

  let savedUser;
  try {
    savedUser = await user.save();
  } catch (error: any) {
    logger.error(error.message);
  }
  console.log('__dirname', __dirname);
  return res.json(savedUser);
});

usersRouter.get('/', async (_req, res) => {
  res.json(await userService.getUsers());
});

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
