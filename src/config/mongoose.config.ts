import { logger } from 'utils/logger';
import mongoose from 'mongoose';
import { MONGODB_URI } from 'utils/config';

// Mongo Configuration with retry connect
class MongoConfig {
  private count = 0;
  private mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  };

  constructor() {
    this.connectWithRetry()
  }

  getMongoose() {
    return mongoose
  }

  connectWithRetry = () => {
    logger.info('Attempting MongoDB connection (will retry if needed)');
    mongoose
      .connect(MONGODB_URI!, this.mongooseOptions)
      .then(() => {
        logger.info('MongoDB is connected');
      })
      .catch((err) => {
        const retrySeconds = 5;
        logger.info(
          `Mongodb connection unsuccessful (will try #${++this
            .count}  after ${retrySeconds} seconds`,
          err
        );
        setTimeout(this.connectWithRetry, retrySeconds * 1000);
      });
  };
}

export default new MongoConfig();
