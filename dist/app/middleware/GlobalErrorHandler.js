"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HandleMongoose_1 = __importDefault(require("./HandleMongoose"));
const HandleCostError_1 = __importDefault(require("./HandleCostError"));
const config_1 = __importDefault(require("../../config/config"));
const GlobalErrorHandler = (err, req, res, next) => {
    let statusCode = 500;
    let message = (err === null || err === void 0 ? void 0 : err.message) || "something went wrong";
    let errorMessage = (err === null || err === void 0 ? void 0 : err.message) || "something went wrong";
    (err === null || err === void 0 ? void 0 : err.message);
    if ((err === null || err === void 0 ? void 0 : err.code) == 11000) {
        const simplified = (0, HandleMongoose_1.default)(err);
        message = simplified === null || simplified === void 0 ? void 0 : simplified.message;
        errorMessage = simplified === null || simplified === void 0 ? void 0 : simplified.errorMessage;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) == "CastError") {
        const simplified = (0, HandleCostError_1.default)(err);
        message = simplified === null || simplified === void 0 ? void 0 : simplified.message;
        errorMessage = simplified === null || simplified === void 0 ? void 0 : simplified.errorMessage;
    }
    res.status(statusCode).json({
        success: false,
        message,
        errorMessage,
        errorDetails: err,
        stack: config_1.default.node_env === "development" ? err === null || err === void 0 ? void 0 : err.stack : "",
    });
};
exports.default = GlobalErrorHandler;
