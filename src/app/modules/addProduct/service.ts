import { TProduct } from "./interface";
import Product from "./modal";

const createProduct = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const findDataFromDb = async () => {
  const result = await Product.find().populate("userId");
  return result;
};

const findSingleDataFromDb = async (id: string) => {
  const result = await Product.findById(id).populate("reviews");
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
  findSingleDataFromDb,
  upProduct,
  deleteProduct,
};
