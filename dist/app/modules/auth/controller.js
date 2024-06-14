"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/utils/sendResponse"));
const service_1 = require("./service");
const loginUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const result = yield service_1.AuthService.loginUser(user);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        message: " Login successful ",
        data: result,
    });
}));
const changePassword = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const password = req.body;
    const user = req.user;
    const result = yield service_1.AuthService.changePassword(user, password);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: "Password changed successfully",
        data: result,
    });
}));
exports.AuthController = {
    loginUser,
    changePassword
};
