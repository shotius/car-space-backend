"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const argon2_1 = __importDefault(require("argon2"));
const user_1 = __importDefault(require("../models/user"));
const logger_1 = __importDefault(require("../utils/logger"));
const express_1 = __importDefault(require("express"));
const usersRouter = express_1.default.Router();
usersRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    let passwordHash;
    try {
        passwordHash = yield argon2_1.default.hash(body.password);
    }
    catch (err) {
        return res.status(500).json({ error: "uneble to hash the password" });
    }
    const user = new user_1.default({
        username: body.username,
        name: body.name,
        role: body.role,
        passwordHash,
    });
    let savedUser;
    try {
        savedUser = yield user.save();
    }
    catch (error) {
        logger_1.default.error(error.message);
    }
    return res.json(savedUser);
}));
usersRouter.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.find({});
    res.json(users);
}));
exports.default = usersRouter;
