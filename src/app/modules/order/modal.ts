import { Schema, model } from "mongoose";
import { TOrder } from "./interface";

// Define the schema for TOrder
const OrderSchema = new Schema<TOrder>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: "user" },
    productId: { type: Schema.Types.ObjectId, required: true, ref: "product" },
    status: {
      type: String,
      required: true,
      enum: ["pending", "paid", "canceled"],
    },
  },
  {
    timestamps: true,
  }
);

const Order = model<TOrder>("Order", OrderSchema);

export default Order;
