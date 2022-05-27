import compression from 'compression';
import ServerGlobal from 'config/ServerGlobal';
import connectRedis from 'connect-redis';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import path from 'path';
import baseRoutes from 'routes/base.routes';
import { SessionUser } from '../shared_with_front/types/types-shared';
import { COOKIE_NAME, __prod__ } from './utils/constants';
import {
  defaultErrorHander,
  errorConverter,
  redirectToHttps,
} from './utils/midlewares';

// -- declare session
declare module 'express-session' {
  interface Session {
    user?: SessionUser;
  }
}

const app = express();
const globalConfig = ServerGlobal.getInstance;

// -- Create Redis Store
const redisStore = connectRedis(session);

globalConfig.connectDB();

// -- cors
const whiteList = [
  'http://localhost:3000',
  'https://whispering-atoll-93096.herokuapp.com/',
];

if (__prod__) {
  app.use(redirectToHttps);
}

app.use(
  require('prerender-node').set('prerenderToken', 'I2tK6WNDQhwk8clI0k4A')
);

app.use(
  cors({
    origin: whiteList,
    credentials: true,
  })
);
app.use(express.json());

// -- when server is behing of reverse proxy
app.set('trust proxy', 1);

// -- Configure session middleware
app.use(
  session({
    name: COOKIE_NAME,
    store: new redisStore({
      client: globalConfig.redis,
      disableTouch: true,
    }),
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 365, // expire in 10 years
      sameSite: 'lax',
      httpOnly: true,
      secure: __prod__,
      path: '/',
    },
    secret: process.env.REDIS_SECRET!,
    resave: false,
  })
);

// -- middewares
app.use(compression());
app.use(express.static('build'));

// -- routes
app.use('/api', baseRoutes);

// final middlewares
app.use(errorConverter);
app.use(defaultErrorHander);

// -- send front from here
// -- 404 error will be handled in the front
app.get('*', function (_req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, '../../build') });
});

export default app;
