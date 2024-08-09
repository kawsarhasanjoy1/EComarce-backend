import { TProduct } from "./interface";
import Product from "./modal";

const createProduct = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const findDataFromDb = async (payload: any) => {
  const queryUrl = payload.query;
  let modifyQuery: Record<string, any> = {};
  if (queryUrl.category) {
    modifyQuery.category = queryUrl.category;
  }
  if (queryUrl.rating) {
    modifyQuery.ratingAverage = { $gte: Number(queryUrl.rating) };
  }
  if (queryUrl.price) {
    modifyQuery.price = {
      $lte: Number(queryUrl.price),
    };
  }

  const result = await Product.find(modifyQuery).populate("userId");
  return result;
};

const findSortProductWithTopRating = async () => {
  try {
    const result: any = await Product.find().sort({ ratingAverage: -1 }).limit(6);
    console.log(result);
    return result;
  } catch (err) {
    err;
  }
};

const findDataFromDbIsFlash = async () => {
  const result = await Product.find({ isFalse: true });
  return result;
};
const findSingleDataFromDb = async (id: string) => {
  const result = await Product.findById(id).populate({
    path: "reviews",
    populate: [
      { path: "userId", model: "user" },
      { path: "productId", model: "product" },
    ],
  });
  return result;
};

const upProduct = async (id: string, payload: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const deleteProduct = async (id: string) => {
  const result = Product.findByIdAndDelete(id);
  return result;
};

export const ProductService = {
  createProduct,
  findDataFromDb,
  findDataFromDbIsFlash,
  findSingleDataFromDb,
  upProduct,
  deleteProduct,
  findSortProductWithTopRating,
};
