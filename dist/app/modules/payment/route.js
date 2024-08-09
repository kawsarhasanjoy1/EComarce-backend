"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const constance_1 = require("../../constance/constance");
const paymentRouter = (0, express_1.Router)();
paymentRouter.post("/create-payment-intent", (0, auth_1.default)(constance_1.USER_ROLE.user), controller_1.paymentController.createPayment);
exports.default = paymentRouter;
