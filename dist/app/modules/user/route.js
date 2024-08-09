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
userRouter.post("/create-user", controller_1.userController.createUser);
userRouter.get("/users", 
// auth(USER_ROLE.admin, USER_ROLE.superAdmin),
controller_1.userController.findDataFromDb);
userRouter.get("/admins", (0, auth_1.default)(constance_1.USER_ROLE.superAdmin), controller_1.userController.findAdminFromDb);
userRouter.get("/user/:id", controller_1.userController.findSingleDataFromDb);
userRouter.patch("/update-user/:id", (0, auth_1.default)(constance_1.USER_ROLE.admin, constance_1.USER_ROLE.superAdmin, constance_1.USER_ROLE.user), controller_1.userController.upUser);
userRouter.patch("/update-role/:id", (0, auth_1.default)(constance_1.USER_ROLE.admin, constance_1.USER_ROLE.superAdmin, constance_1.USER_ROLE.user), controller_1.userController.upRole);
userRouter.delete("/delete-user/:id", (0, auth_1.default)(constance_1.USER_ROLE.admin, constance_1.USER_ROLE.superAdmin), controller_1.userController.deleteUser);
exports.default = userRouter;
