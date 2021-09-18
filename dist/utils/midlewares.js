"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unknownEndpoint = exports.defaultErrorHander = void 0;
const logger_1 = __importDefault(require("../utils/logger"));
const defaultErrorHander = (error, _request, response) => {
    logger_1.default.error(error.message);
    const status = error.status || 500;
    const message = error.message || 'something went wrong';
    if (error.name === 'CastError') {
        response.status(400).send({ error: 'malformed Id' });
    }
    else if (error.name === 'ValidationError') {
        response.status(400).send({ error: error.message });
    }
    response.status(status).send({ status, message });
};
exports.defaultErrorHander = defaultErrorHander;
const unknownEndpoint = (_request, response) => {
    response.status(404).send({ error: 'unknow endpoint' });
};
exports.unknownEndpoint = unknownEndpoint;
