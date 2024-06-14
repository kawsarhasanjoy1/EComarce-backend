import { Schema } from "mongoose";

export type TOrder = {
  userId: Schema.Types.ObjectId;
  productId: Schema.Types.ObjectId;
  status: "pending" | "paid" | "canceled";
};
