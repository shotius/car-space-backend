import connectRedis from 'connect-redis';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import Redis from 'ioredis';
import mongoose from 'mongoose';
import path from 'path';
import url from 'url';
import authRouter from './routes/auth.route';
import carsRouter from './routes/cars.route';
import usersRouter from './routes/users.route';
import { MONGODB_URI } from './utils/config';
import { __prod__ } from './utils/constants';
import logger from './utils/logger';
import { defaultErrorHander } from './utils/midlewares';
import compression from 'compression';
import { SessionUser } from '../shared_with_front/types/types-shared';

// -- declare session
declare module 'express-session' {
  interface Session {
    user?: SessionUser;
  }
}

const app = express();

logger.info('connecting to db');

// -- connnection to mongoDB
mongoose
  .connect(MONGODB_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    logger.info('connected to MongoDb');
  })
  .catch((error) => {
    console.error('error connecting to DB', error.message);
  });

// -- configure Redis
const redisStore = connectRedis(session);

// -- configure redis client
let redisClient;
if (process.env.REDIS_URL) {
  const redis_uri = url.parse(process.env.REDIS_URL, true);
  redisClient = new Redis({
    port: Number(redis_uri.port) + 1,
    host: redis_uri.hostname!,
    password: redis_uri.auth?.split(':')[1],
    db: 0,
    tls: {
      rejectUnauthorized: false,
      requestCert: true,
    },
  });
} else {
  redisClient = new Redis();
}

// -- cors
const whiteList = [
  'http://localhost:3000',
  'https://whispering-atoll-93096.herokuapp.com/',
];

app.use(
  cors({
    origin: whiteList,
    credentials: true,
  })
);
app.use(express.json());

app.set('trust proxy', 1);

// -- Configure session middleware
app.use(
  session({
    name: 'uid',
    store: new redisStore({ client: redisClient, disableTouch: true }),
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 365, // expire in 10 years
      sameSite: 'lax',
      httpOnly: true,
      secure: __prod__,
      path: '/',
    },
    secret: 'keyasdf',
    resave: false,
  })
);

// -- middewares
app.use(compression());
app.use(express.static('build'));

// -- routes
app.use('/api/users', usersRouter);
app.use('/api/cars', carsRouter);
app.use('/api/auth', authRouter);

app.use(defaultErrorHander);

// send front from here
app.get('*', function (_req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, '../build') });
});

export default app;
