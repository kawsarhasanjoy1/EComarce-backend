"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const constance_1 = require("../../constance/constance");
const reviewRouter = (0, express_1.Router)();
reviewRouter.post("/review", controller_1.ReviewController.createReview);
reviewRouter.get("/reviews", controller_1.ReviewController.findDataFromDb);
reviewRouter.get("/admin-reviews", (0, auth_1.default)(constance_1.USER_ROLE.admin, constance_1.USER_ROLE.superAdmin), controller_1.ReviewController.findDataFromDbForAdmin);
reviewRouter.get("/review/:id", controller_1.ReviewController.findSingleDataFromDb);
reviewRouter.get("/user-review/:id", (0, auth_1.default)(constance_1.USER_ROLE.user), controller_1.ReviewController.findSingleReviewWithUserId);
reviewRouter.delete("/delete-review", (0, auth_1.default)(constance_1.USER_ROLE.admin, constance_1.USER_ROLE.superAdmin), controller_1.ReviewController.deleteReview);
exports.default = reviewRouter;
