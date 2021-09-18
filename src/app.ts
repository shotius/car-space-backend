import express from "express";
import session from "express-session";
import Redis from "ioredis";
import connectRedis from "connect-redis";
import mongoose from "mongoose";
import cors from "cors";

import logger from "../utils/logger";
import { MONGODB_URI } from "../utils/config";
import { defaultErrorHander } from "../utils/midlewares";

import notesRouter from "../controlers/notes";
import usersRouter from "../controlers/users";
import loginRouter from "../controlers/login";
import logoutRouter from "../controlers/logout";
import meRouter from "../controlers/me";
import url from "url";
import path from 'path';

import {__prod__} from "../utils/constants";
import { SessionUser } from "types";

declare module "express-session" {
  interface Session {
    user?: SessionUser;
  }
}

const app = express();

logger.info("connecting to db");

// connnection to mongoDB
mongoose
  .connect(MONGODB_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    logger.info("connected to MongoDb");
  })
  .catch((error) => {
    console.error("error connecting to DB", error.message);
  });

// configure Redis
const redisStore = connectRedis(session);

// configure redis client
let redisClient;
if (process.env.REDIS_URL) {
  const redis_uri = url.parse(process.env.REDIS_URL, true);
  redisClient = new Redis({
    port: Number(redis_uri.port) + 1,
    host: redis_uri.hostname!,
    password: redis_uri.auth?.split(":")[1],
    db: 0,
    tls: {
      rejectUnauthorized: false,
      requestCert: true,
    }
  });
} else {
  redisClient = new Redis()
}

// const whiteList = ["http://localhost:3000", "https://whispering-atoll-93096.herokuapp.com/"]
app.use(
  cors({
    origin: "https://whispering-atoll-93096.herokuapp.com/",
    credentials: true,
  })
);
app.use(express.json());

app.set("trust proxy", 1);
//Configure session middleware
app.use(
  session({
    name: "uid",
    store: new redisStore({ client: redisClient, disableTouch: true }),
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 365, // expire in 10 years
      sameSite: "lax",
      httpOnly: true,
      secure: __prod__,
      path: "/",
    },
    secret: "keyasdf",
    resave: false,
  })
);

app.use(express.static( 'build'));


app.use("/api/notes", notesRouter);
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);
app.use("/api/logout", logoutRouter);
app.use("/api/me", meRouter);


app.get('*', function (_req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '../../build')})
})

// app.use(middleware.unknownEndpoint);
app.use(defaultErrorHander);

export default app
