"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const constance_1 = require("../../constance/constance");
const productRouter = (0, express_1.Router)();
productRouter.post("/product", (0, auth_1.default)(constance_1.USER_ROLE.admin), controller_1.ProductController.createProduct);
productRouter.get("/products", (0, auth_1.default)(constance_1.USER_ROLE.admin), controller_1.ProductController.findDataFromDb);
productRouter.get("/product/:id", controller_1.ProductController.findSingleDataFromDb);
productRouter.patch("/update-product/:id", (0, auth_1.default)(constance_1.USER_ROLE.admin), controller_1.ProductController.upProduct);
productRouter.delete("/delete-product/:id", (0, auth_1.default)(constance_1.USER_ROLE.admin, constance_1.USER_ROLE.user), controller_1.ProductController.deleteProduct);
exports.default = productRouter;
