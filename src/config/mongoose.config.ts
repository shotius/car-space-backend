import { logger } from 'utils/logger';
import mongoose, { Mongoose } from 'mongoose';
import { MONGODB_URI } from 'utils/config';

// Mongo Configuration with retry connect
export class MongoConfig {
  private static _mongoInstance: Mongoose;
  private count = 0;
  private mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  };

  constructor() {}

  // get mongoose instance
  static get getMongoose() {
    if (this._mongoInstance) {
      return this._mongoInstance;
    }
    this._mongoInstance = mongoose;
    return this._mongoInstance;
  }

  // connect to the database
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
