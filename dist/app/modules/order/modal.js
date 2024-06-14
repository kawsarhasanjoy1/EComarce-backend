"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Define the schema for TOrder
const OrderSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "user" },
    productId: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "product" },
    status: {
        type: String,
        required: true,
        enum: ["pending", "paid", "canceled"],
    },
}, {
    timestamps: true,
});
const Order = (0, mongoose_1.model)("Order", OrderSchema);
exports.default = Order;
