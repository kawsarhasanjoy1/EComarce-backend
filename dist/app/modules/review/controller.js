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
exports.ReviewController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/utils/catchAsync"));
const service_1 = require("./service");
const sendResponse_1 = __importDefault(require("../../../shared/utils/sendResponse"));
const createReview = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield service_1.ReviewService.createReview(data);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        message: "Review created successful",
        data: result,
    });
}));
const findDataFromDb = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_1.ReviewService.findDataFromDb();
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        message: "Review retrieve successful",
        data: result,
    });
}));
const findDataFromDbForAdmin = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_1.ReviewService.findDataFromDb();
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        message: "Review retrieve successful",
        data: result,
    });
}));
const findSingleDataFromDb = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield service_1.ReviewService.findSingleDataFromDb(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        message: "Single Review retrieve successful",
        data: result,
    });
}));
const findSingleReviewWithUserId = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield service_1.ReviewService.findSingleReviewWithUserId(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        message: "Single user Review retrieve successful",
        data: result,
    });
}));
const deleteReview = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield service_1.ReviewService.deleteReview(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        message: "Review deleted successful",
        data: result,
    });
}));
exports.ReviewController = {
    createReview,
    findDataFromDb,
    findDataFromDbForAdmin,
    findSingleDataFromDb,
    findSingleReviewWithUserId,
    deleteReview,
};
