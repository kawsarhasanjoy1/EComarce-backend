"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const nutrientsSchema = new mongoose_1.Schema({
    vitamins: [String],
    minerals: [String],
});
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discountPrice: { type: Number, default: 0 },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    isFlash: {
        type: Boolean,
        default: false,
    },
    discountEndDate: {
        type: String,
        required: true,
    },
    nutrients: {
        type: nutrientsSchema,
        required: true,
    },
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: "user" },
    ratingAverage: {
        type: Number,
        default: 4.5,
    },
    stock: { type: Number, default: 0 },
    ratingQuantity: {
        type: Number,
        default: 0,
    },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
productSchema.virtual("reviews", {
    ref: "review",
    foreignField: "productId",
    localField: "_id",
});
const Product = (0, mongoose_1.model)("product", productSchema);
exports.default = Product;
