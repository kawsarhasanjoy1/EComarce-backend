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
exports.ProductController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/utils/sendResponse"));
const service_1 = require("./service");
const createProduct = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    data;
    const result = yield service_1.ProductService.createProduct(data);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        message: "Product created successful",
        data: result,
    });
}));
const findDataFromDb = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_1.ProductService.findDataFromDb(req);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: "Product retrieve successful",
        data: result,
    });
}));
const findSortProductWithTopRating = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_1.ProductService.findSortProductWithTopRating();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: "Top product retrieve successful",
        data: result,
    });
}));
const findDataFromDbIsFlash = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_1.ProductService.findDataFromDbIsFlash();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: "Flash sale retrieve successful",
        data: result,
    });
}));
const findSingleDataFromDb = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield service_1.ProductService.findSingleDataFromDb(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: "Single Product retrieve successful",
        data: result,
    });
}));
const upProduct = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const Product = req.body;
    const result = yield service_1.ProductService.upProduct(id, Product);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: "Product updated successful",
        data: result,
    });
}));
const deleteProduct = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield service_1.ProductService.deleteProduct(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: "Product deleted successful",
        data: result,
    });
}));
exports.ProductController = {
    findDataFromDbIsFlash,
    createProduct,
    findDataFromDb,
    findSingleDataFromDb,
    findSortProductWithTopRating,
    upProduct,
    deleteProduct,
};
