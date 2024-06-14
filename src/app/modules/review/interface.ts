import mongoose, { Model, Schema, Types } from "mongoose";

export type TReview = {
  description: string;
  rating: number;
  userId: Types.ObjectId;
  productId: Types.ObjectId;
};

export interface TReviewModel extends Model<TReview> {
  calcAverageRatings(tourId: mongoose.Types.ObjectId): Promise<void>;
}
