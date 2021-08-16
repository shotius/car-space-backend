const express = require("express");
const session = require("express-session");
const redis = require("redis");
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

const __prod__ = require("./constants");

const app = express();

logger.info("connecting to db");

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
const redisClient = redis.createClient();

//Configure redis client
// const redisClient = redis.createClient({
// host: "localhost",
// port: 6379,
// });

// redisClient.on("error", function (err) {
//   console.log("Could not establish a connection with redis. " + err);
// });
// redisClient.on("connect", function (err) {
//   console.log("Connected to redis successfully");
// });

app.use(cors({
  origin: true,
  methods: ["POST"],
  credentials: true,
  maxAge: 3600
}));
app.use(express.json());

//Configure session middleware
app.use(
  session({
    name: "uid",
    store: new redisStore({ client: redisClient, disableTouch: true }),
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 365, // expire in 10 years
      sameSite: "lax",
      httpOnly: false,
      secure: __prod__,
    },
    secret: "keyasdf",
    resave: false,
  })
);

app.use("/api/notes", notesRouter);
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);
app.use("/api/logout", logoutRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
