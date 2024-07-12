import { Schema } from "mongoose";

interface UserInfo {
  name: string;
  number: string;
  district: string;
  subdistrict: string;
}

export interface TOrder {
  paymentId: string;
  userId?: Schema.Types.ObjectId;
  email: string,
  price: number;
  quantity: number;
  productId: Schema.Types.ObjectId[];
  userInfo: UserInfo;
}
