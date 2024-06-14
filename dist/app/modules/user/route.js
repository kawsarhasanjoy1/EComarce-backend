"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const constance_1 = require("../../constance/constance");
const userRouter = (0, express_1.Router)();
userRouter.post("/create-user", (0, auth_1.default)(constance_1.USER_ROLE.user), controller_1.userController.createUser);
userRouter.get("/users", (0, auth_1.default)(constance_1.USER_ROLE.admin, constance_1.USER_ROLE.superAdmin), controller_1.userController.findDataFromDb);
userRouter.get("/user/:id", controller_1.userController.findSingleDataFromDb);
userRouter.patch("/update-user/:id", controller_1.userController.upUser);
userRouter.delete("/delete-user/:id", controller_1.userController.deleteUser);
exports.default = userRouter;
