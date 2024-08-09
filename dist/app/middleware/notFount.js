"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
const http_status_1 = __importDefault(require("http-status"));
const notFound = (req, res) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: `${req.originalUrl} api not found`,
    });
};
exports.default = notFound;
