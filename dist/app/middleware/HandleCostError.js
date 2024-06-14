"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HandleCostError = (err) => {
    const statusCode = 400;
    const message = "Invalid ID";
    const invalidId = err.message.match(/\"([a-f0-9]+)\"/);
    const errorMessage = invalidId ? `${invalidId[1]} is not valid id` : "";
    return {
        statusCode,
        message,
        errorMessage,
    };
};
exports.default = HandleCostError;
