import { TReview } from "./interface";
import Review from "./modal";

const createReview = async (payload: TReview) => {
  const result = await Review.create(payload);
  if (result) {
    await Review.calcAverageRatings(result?.productId);
  }
  return result;
};

const findDataFromDb = async () => {
  try {
    const result = await Review.find()
      .populate({ path: "userId" })
      .populate({ path: "productId" });

    return result;
  } catch (err) {
    console.log(err);
  }
};

const findSingleDataFromDb = async (id: string) => {
  const result = await Review.findById(id).populate("userId");
  return result;
};

const deleteReview = async (id: string) => {
  const result = Review.findByIdAndDelete(id);
  return result;
};

export const ReviewService = {
  createReview,
  findDataFromDb,
  findSingleDataFromDb,
  deleteReview,
};
