const express = require("express");
const session = require("express-session");
const Redis = require("ioredis");
const connectRedis = require("connect-redis");
const mongoose = require("mongoose");
const cors = require("cors");

const logger = require("./utils/logger");
const config = require("./utils/config");
const middleware = require("./utils/midlewares");

const notesRouter = require("./controlers/notes");
const usersRouter = require("./controlers/users");
const loginRouter = require("./controlers/login");
const logoutRouter = require("./controlers/logout");
const meRouter = require("./controlers/me");
const url = require("url");

const __prod__ = require("./constants");

const app = express();

logger.info("connecting to db", config.MONGODB_URI);

// connnection to mongoDB
mongoose
  .connect(config.MONGODB_URI, {
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
    host: redis_uri.hostname,
    password: redis_uri.auth.split(":")[1],
    db: 0,
    tls: {
      rejectUnauthorized: false,
      requestCert: true,
      agent: false,
    },
  });
} else {
  redisClient = new Redis()
}

const whiteList = ["http://localhost:3000", "https://whispering-atoll-93096.herokuapp.com/"]
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

app.use(express.static('build'))

app.use("/api/notes", notesRouter);
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);
app.use("/api/logout", logoutRouter);
app.use("/api/me", meRouter);

app.get('*', function (req, res) {
  res.render('build/index.html')
})

// app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
