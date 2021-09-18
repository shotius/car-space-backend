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
const express_1 = __importDefault(require("express"));
const note_1 = __importDefault(require("../models/note"));
const user_1 = __importDefault(require("../models/user"));
const notesRouter = express_1.default.Router();
notesRouter.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield note_1.default.find({}).populate('user', { username: 1, name: 1 });
    res.json(notes);
}));
notesRouter.get("/:id", (req, res, next) => {
    note_1.default.findById(req.params.id)
        .then((note) => {
        if (note) {
            res.json(note);
        }
        else {
            res.status(404).end();
        }
    })
        .catch((error) => next(error));
});
notesRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    if (!body.userId) {
        res.json(400).json({ error: "userId not provided" });
    }
    const user = yield user_1.default.findById(body.userId);
    if (!body.content) {
        res.status(400).json({
            error: "content missing",
        });
    }
    if (!user) {
        return res.status(400).send('user not found');
    }
    const note = new note_1.default({
        content: body.content,
        important: body.important || false,
        date: new Date(),
        user: user._id,
    });
    const savedNote = yield note.save();
    user.notes = user.notes.concat(savedNote._id);
    yield user.save();
    return res.json(savedNote);
}));
exports.default = notesRouter;
