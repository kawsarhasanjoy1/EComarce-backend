"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
const HandleMongoose = (err) => {
    let message = "Duplicate error";
    let errorMessage = err === null || err === void 0 ? void 0 : err.keyValue;
    let errorDetails = err;
    return {
        message,
        errorMessage,
        errorDetails,
    };
};
exports.default = HandleMongoose;
