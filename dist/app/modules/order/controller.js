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
exports.OrderController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/utils/sendResponse"));
const services_1 = require("./services");
const createOrder = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    (data);
    const result = yield services_1.OrderService.createOrder(data);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        message: "Order created successful",
        data: result,
    });
}));
const findDataFromDb = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_1.OrderService.findDataFromDb();
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        message: "Order retrieve successful",
        data: result,
    });
}));
const findSingleDataFromDb = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield services_1.OrderService.findSingleDataFromDb(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        message: "Single Order retrieve successful",
        data: result,
    });
}));
const findDataWithEmailFromDb = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.params.email;
    const result = yield services_1.OrderService.findDataWithEmailFromDb(email);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: " Order retrieve successful with email",
        data: result,
    });
}));
const findUserStatsFromDb = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.params.email;
    const result = yield services_1.OrderService.findUserStatsFromDb(email);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: "User total price fetch successful with email",
        data: result,
    });
}));
const findAdminStatsFromDb = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_1.OrderService.findAdminStatsFromDb();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: "Admin total price fetch successful ",
        data: result,
    });
}));
const deleteOrder = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield services_1.OrderService.deleteOrder(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        message: "Order deleted successful",
        data: result,
    });
}));
exports.OrderController = {
    createOrder,
    findDataFromDb,
    findSingleDataFromDb,
    deleteOrder,
    findDataWithEmailFromDb,
    findUserStatsFromDb,
    findAdminStatsFromDb
};
