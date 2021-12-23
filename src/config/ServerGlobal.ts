import Redis from 'ioredis';
import url from 'url';
import mongooseConfig, { MongoConfig } from './mongoose.config';

// This is singleton class for server
class ServerGlobal {
  private static _instance: ServerGlobal;
  private _redis: Redis.Redis;

  private constructor() {
    // Redis instantiation
    if (process.env.REDIS_URL) {
      const redis_uri = url.parse(process.env.REDIS_URL, true);
      this._redis = new Redis({
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
      this._redis = new Redis();
    }
  }

  // Get single ton instance of the class
  static get getInstance() {
    if (this._instance) {
      return this._instance;
    }

    this._instance = new ServerGlobal();
    return this._instance;
  }

  // -- MongoDB connection
  connectDB() {
    mongooseConfig.connectWithRetry();
  }

  // Get Redis from singleton (usefull)
  get redis() {
    return this._redis;
  }

  // not very usefull
  get mongoose() {
    const mongoose = new MongoConfig();
    return mongoose;
  }


}

export default ServerGlobal;
