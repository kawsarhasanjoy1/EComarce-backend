"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const constance_1 = require("../../constance/constance");
const auth_1 = __importDefault(require("../../middleware/auth"));
const orderRouter = (0, express_1.Router)();
orderRouter.post("/order", (0, auth_1.default)(constance_1.USER_ROLE.user), controller_1.OrderController.createOrder);
orderRouter.get("/orders", (0, auth_1.default)(constance_1.USER_ROLE.admin), controller_1.OrderController.findDataFromDb);
orderRouter.get("/orders/:id", controller_1.OrderController.findSingleDataFromDb);
orderRouter.get("/orders/:email", controller_1.OrderController.findDataWithEmailFromDb);
orderRouter.delete("/delete-orders/:id", controller_1.OrderController.deleteOrder);
exports.default = orderRouter;
