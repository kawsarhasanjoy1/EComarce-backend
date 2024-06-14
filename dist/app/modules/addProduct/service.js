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
exports.ProductService = void 0;
const modal_1 = __importDefault(require("./modal"));
const createProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield modal_1.default.create(payload);
    return result;
});
const findDataFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield modal_1.default.find().populate("userId");
    return result;
});
const findSingleDataFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield modal_1.default.findById(id).populate("reviews");
    return result;
});
const upProduct = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield modal_1.default.findByIdAndUpdate(id, payload, {
        new: true,
    });
    return result;
});
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = modal_1.default.findByIdAndDelete(id);
    return result;
});
exports.ProductService = {
    createProduct,
    findDataFromDb,
    findSingleDataFromDb,
    upProduct,
    deleteProduct,
};
