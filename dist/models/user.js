"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        unique: true
    },
    name: String,
    role: String,
    passwordHash: String,
    notes: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Note',
        }
    ]
});
userSchema.set("toJSON", {
    transform: (_document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        // the passwordHash should not be revealed
        delete returnedObject.passwordHash;
    },
});
exports.default = (0, mongoose_1.model)("User", userSchema);
