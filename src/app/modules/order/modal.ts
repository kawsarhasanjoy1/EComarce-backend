import { Schema, model } from "mongoose";
import { TOrder } from "./interface";

// Define the schema for TOrder
const OrderSchema = new Schema<TOrder>(
  {
    paymentId: {type: String,required: true},
    userId: { type: Schema.Types.ObjectId, ref: "user" }, // Assuming 'User' is your user model
    email: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    productId: [{ type: Schema.Types.ObjectId, ref: "product" }], // Assuming 'Product' is your product model
    userInfo: {
      name: { type: String, required: true },
      number: { type: String, required: true },
      district: { type: String, required: true },
      subdistrict: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  }
);

const Order = model<TOrder>("Order", OrderSchema);

export default Order;
