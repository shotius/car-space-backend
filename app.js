const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const logger = require("./utils/logger");
const config = require("./utils/config");
const middleware = require("./utils/midlewares");

const notesRouter = require("./controlers/notes");
const usersRouter = require("./controlers/users")

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

app.use(cors());
app.use(express.json());

app.use("/api/notes", notesRouter);
app.use("/api/users", usersRouter)

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app
