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
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../models/user"));
const loginRouter = express_1.default.Router();
loginRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const user = yield user_1.default.findOne({ username: body.username });
    const passwordIsCorrect = user === null
        ? null
        : yield argon2_1.default.verify(user.passwordHash, body.password);
    if (!(user && passwordIsCorrect)) {
        return res.status(401).json({ error: "invalid password or username" });
    }
    const userForSession = {
        username: user.username,
        isAuthenticated: true,
        role: user.role,
        id: user._id,
    };
    req.session.user = userForSession;
    return res.status(200).send({
        role: user.role.toLowerCase(),
        success: true,
    });
}));
exports.default = loginRouter;
