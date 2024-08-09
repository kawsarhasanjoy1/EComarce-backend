"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Define the schema for TOrder
const OrderSchema = new mongoose_1.Schema({
    paymentId: { type: String, required: true },
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: "user" }, // Assuming 'User' is your user model
    email: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    productId: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "product" }], // Assuming 'Product' is your product model
    userInfo: {
        name: { type: String, required: true },
        number: { type: String, required: true },
        district: { type: String, required: true },
        subdistrict: { type: String, required: true },
    },
}, {
    timestamps: true,
});
const Order = (0, mongoose_1.model)("Order", OrderSchema);
exports.default = Order;
