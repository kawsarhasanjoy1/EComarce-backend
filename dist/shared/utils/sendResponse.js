"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sentResponse = (res, data) => {
    res.status(data === null || data === void 0 ? void 0 : data.statusCode).json({
        success: true,
        message: data === null || data === void 0 ? void 0 : data.message,
        data: data === null || data === void 0 ? void 0 : data.data,
    });
};
exports.default = sentResponse;
