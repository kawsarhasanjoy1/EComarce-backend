import { Schema, model } from "mongoose";
import { TReview, TReviewModel } from "./interface";
import Product from "../addProduct/modal";

const reviewSchema = new Schema<TReview>({
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "user" },
  productId: { type: Schema.Types.ObjectId, ref: "product" },
});

reviewSchema.statics.calcAverageRatings = async function (
  productId: Schema.Types.ObjectId
) {
  const stats = await this.aggregate([
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
    await Product.findByIdAndUpdate(productId, {
      ratingAverage: stats[0].avgRating,
      ratingQuantity: stats[0].numberOfRatings,
    });
  } else {
    await Product.findByIdAndUpdate(productId, {
      ratingAverage: 0,
      ratingQuantity: 0,
    });
  }
};

const Review = model<TReview, TReviewModel>("review", reviewSchema);
export default Review;
