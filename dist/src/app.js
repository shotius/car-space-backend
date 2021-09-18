"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const ioredis_1 = __importDefault(require("ioredis"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const logger_1 = __importDefault(require("../utils/logger"));
const config_1 = require("../utils/config");
const midlewares_1 = require("../utils/midlewares");
const notes_1 = __importDefault(require("../controlers/notes"));
const users_1 = __importDefault(require("../controlers/users"));
const login_1 = __importDefault(require("../controlers/login"));
const logout_1 = __importDefault(require("../controlers/logout"));
const me_1 = __importDefault(require("../controlers/me"));
const url_1 = __importDefault(require("url"));
const path_1 = __importDefault(require("path"));
const constants_1 = require("../utils/constants");
const app = (0, express_1.default)();
logger_1.default.info("connecting to db");
// connnection to mongoDB
mongoose_1.default
    .connect(config_1.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
    .then(() => {
    logger_1.default.info("connected to MongoDb");
})
    .catch((error) => {
    console.error("error connecting to DB", error.message);
});
// configure Redis
const redisStore = (0, connect_redis_1.default)(express_session_1.default);
// configure redis client
let redisClient;
if (process.env.REDIS_URL) {
    const redis_uri = url_1.default.parse(process.env.REDIS_URL, true);
    redisClient = new ioredis_1.default({
        port: Number(redis_uri.port) + 1,
        host: redis_uri.hostname,
        password: (_a = redis_uri.auth) === null || _a === void 0 ? void 0 : _a.split(":")[1],
        db: 0,
        tls: {
            rejectUnauthorized: false,
            requestCert: true,
        }
    });
}
else {
    redisClient = new ioredis_1.default();
}
// const whiteList = ["http://localhost:3000", "https://whispering-atoll-93096.herokuapp.com/"]
app.use((0, cors_1.default)({
    origin: "https://whispering-atoll-93096.herokuapp.com/",
    credentials: true,
}));
app.use(express_1.default.json());
app.set("trust proxy", 1);
//Configure session middleware
app.use((0, express_session_1.default)({
    name: "uid",
    store: new redisStore({ client: redisClient, disableTouch: true }),
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365,
        sameSite: "lax",
        httpOnly: true,
        secure: constants_1.__prod__,
        path: "/",
    },
    secret: "keyasdf",
    resave: false,
}));
app.use(express_1.default.static('build'));
app.use("/api/notes", notes_1.default);
app.use("/api/users", users_1.default);
app.use("/api/login", login_1.default);
app.use("/api/logout", logout_1.default);
app.use("/api/me", me_1.default);
app.get('*', function (_req, res) {
    res.sendFile('index.html', { root: path_1.default.join(__dirname, '../../build') });
});
// app.use(middleware.unknownEndpoint);
app.use(midlewares_1.defaultErrorHander);
exports.default = app;
