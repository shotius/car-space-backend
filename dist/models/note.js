"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const noteSchema = new mongoose_1.Schema({
    content: { type: String, minLength: 5, required: true },
    date: { type: Date, required: true },
    important: Boolean,
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    },
});
// modify bilt in method "toJSON"
noteSchema.set('toJSON', {
    transform: (_document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});
// we export model for create documents
const noteModel = (0, mongoose_1.model)('Note', noteSchema);
exports.default = noteModel;
