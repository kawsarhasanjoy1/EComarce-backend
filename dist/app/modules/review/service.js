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
exports.ReviewService = void 0;
const modal_1 = __importDefault(require("./modal"));
const createReview = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield modal_1.default.create(payload);
    if (result) {
        yield modal_1.default.calcAverageRatings(result === null || result === void 0 ? void 0 : result.productId);
    }
    return result;
});
const findDataFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield modal_1.default.find()
            .populate({ path: "userId" })
            .populate({ path: "productId" });
        return result;
    }
    catch (err) {
        err;
    }
});
const findDataFromDbForAdmin = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield modal_1.default.find()
            .populate({ path: "userId" })
            .populate({ path: "productId" });
        return result;
    }
    catch (err) {
        err;
    }
});
const findSingleDataFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield modal_1.default.findById(id)
        .populate({ path: "userId" })
        .populate({ path: "productId" });
    return result;
});
const findSingleReviewWithUserId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield modal_1.default.find({ userId: id })
        .populate({ path: "userId" })
        .populate({ path: "productId" });
    return result;
});
const deleteReview = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = modal_1.default.findByIdAndDelete(id);
    return result;
});
exports.ReviewService = {
    createReview,
    findDataFromDb,
    findDataFromDbForAdmin,
    findSingleDataFromDb,
    findSingleReviewWithUserId,
    deleteReview,
};
