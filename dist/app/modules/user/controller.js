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
exports.userController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/utils/catchAsync"));
const service_1 = require("./service");
const sendResponse_1 = __importDefault(require("../../../shared/utils/sendResponse"));
const createUser = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield service_1.userService.createUser(data);
    console.log(result);
    const user = {
        _id: result === null || result === void 0 ? void 0 : result._id,
        name: result.name,
        email: result.email,
        image: result.image,
        role: result.role,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        message: "User created successful",
        data: user,
    });
}));
const findDataFromDb = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_1.userService.findDataFromDb();
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        message: "User retrieve successful",
        data: result,
    });
}));
const findSingleDataFromDb = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield service_1.userService.findSingleDataFromDb(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        message: "Single user retrieve successful",
        data: result,
    });
}));
const upUser = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = req.body;
    const result = yield service_1.userService.upUser(id, user);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        message: "User updated successful",
        data: result,
    });
}));
const deleteUser = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield service_1.userService.deleteUser(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        message: "User deleted successful",
        data: result,
    });
}));
exports.userController = {
    createUser,
    findDataFromDb,
    findSingleDataFromDb,
    upUser,
    deleteUser,
};
