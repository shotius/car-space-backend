import Redis from 'ioredis';
import url from 'url';
import mongooseConfig, { MongoConfig } from './mongoose.config';
var http = require('http');

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
    this.keepDynoAlive();
  }

  // Get single ton instance of the class
  static get getInstance() {
    if (this._instance) {
      return this._instance;
    }

    this._instance = new ServerGlobal();
    return this._instance;
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
  
  // ping the server every 30 hour to keep dyno alive
  keepDynoAlive() {
    setInterval(function () {
      http.get('http://whispering-atoll-93096.herokuapp.com/home');
    }, 1000 * 60 * 30); // 30 min
  }

  // -- MongoDB connection
  connectDB() {
    mongooseConfig.connectWithRetry();
  }
}

export default ServerGlobal;
