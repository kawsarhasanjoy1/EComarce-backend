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
const mongoose_1 = require("mongoose");
const modal_1 = __importDefault(require("../addProduct/modal"));
const reviewSchema = new mongoose_1.Schema({
    description: { type: String, required: true },
    rating: { type: Number, required: true },
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: "user" },
    productId: { type: mongoose_1.Schema.Types.ObjectId, ref: "product" },
});
reviewSchema.statics.calcAverageRatings = function (productId) {
    return __awaiter(this, void 0, void 0, function* () {
        const stats = yield this.aggregate([
            {
                $match: { productId },
            },
            {
                $group: {
                    _id: "$productId",
                    numberOfRatings: { $sum: 1 },
                    avgRating: { $avg: "$rating" },
                },
            },
        ]);
        if (stats.length > 0) {
            yield modal_1.default.findByIdAndUpdate(productId, {
                ratingAverage: stats[0].avgRating,
                ratingQuantity: stats[0].numberOfRatings,
            });
        }
        else {
            yield modal_1.default.findByIdAndUpdate(productId, {
                ratingAverage: 0,
                ratingQuantity: 0,
            });
        }
    });
};
const Review = (0, mongoose_1.model)("review", reviewSchema);
exports.default = Review;
