"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middleware/auth"));
const constance_1 = require("../../constance/constance");
const controller_1 = require("./controller");
const loginRouter = (0, express_1.Router)();
loginRouter.post("/login", controller_1.AuthController.loginUser);
loginRouter.post("/change-password", (0, auth_1.default)(constance_1.USER_ROLE.user, constance_1.USER_ROLE.admin), controller_1.AuthController.changePassword);
exports.default = loginRouter;
