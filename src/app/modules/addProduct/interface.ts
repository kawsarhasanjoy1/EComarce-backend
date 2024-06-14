import { Types } from "mongoose";

type TNutrients = {
  vitamins: [];
  minerals: [];
};
export type TProduct = {
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  isFlash: boolean;
  discountEndDate: string;
  nutrients: TNutrients;
  userId?: Types.ObjectId;
  ratingAverage: number;
  ratingQuantity: number;
};
