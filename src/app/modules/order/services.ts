import Product from "../addProduct/modal";
import Review from "../review/modal";
import User from "../user/modal";
import { TOrder } from "./interface";
import Order from "./modal";

const createOrder = async (payload: TOrder) => {
  const result = await Order.create(payload);
  return result;
};

const findDataFromDb = async () => {
  try {
    const result = await Order.find();

    return result;
  } catch (err) {
    console.log(err);
  }
};

const findSingleDataFromDb = async (id: string) => {
  const result = await Order.findById(id).populate("userId");
  return result;
};
const findDataWithEmailFromDb = async (email: string) => {
  const result = await Order.findOne({ email })
    .populate("userId")
    .populate("productId");
  return result;
};
const findUserStatsFromDb = async (email: string) => {
  const order: any = await Order.find({ email }).populate("productId");
  const totalPrice = order.reduce((acc: any, obj: any) => acc + obj.price, 0);
  const totalOrder = order.reduce(
    (acc: any, obj: any) => acc + obj.quantity,
    0
  );

  const review = await Review.find().populate("userId");
  const totalReview = review?.filter(
    (item: any) => item?.userId?.email === email
  ).length;

  return {
    totalPrice,
    totalOrder,
    totalReview,
  };
};
const findAdminStatsFromDb = async () => {
  const order: any = await Order.find().populate("productId");
  const orderDetails = await Order.aggregate([
    { $unwind: "$productId" },
    {
      $lookup: {
        from: "products",
        localField: "productId",
        foreignField: "_id",
        as: "productDetails",
      },
    },
    { $unwind: "$productDetails" },
    {
      $group: {
        _id: "$productDetails.category",
        count: { $sum: 1 },
        totalPrice: { $sum: "$productDetails.price" }, // Aggregate sum of product prices
      },
    },
  ]);

  console.log(orderDetails);



  const totalOrder = order?.reduce(
    (acc: any, cur: any) => acc + cur?.quantity,
    0
  );
  const totalPrice = order?.reduce((acc: any, cur: any) => acc + cur?.price, 0);
  const totalProduct = await Product.estimatedDocumentCount();
  const totalUser = await User.estimatedDocumentCount();
  const totalReview = await Review.estimatedDocumentCount();

  return {
    order,
    orderDetails,
    totalOrder,
    totalUser,
    totalReview,
    totalPrice,
    totalProduct,
  };
};

const deleteOrder = async (id: string) => {
  const result = Order.findByIdAndDelete(id);
  return result;
};

export const OrderService = {
  createOrder,
  findDataFromDb,
  findSingleDataFromDb,
  findDataWithEmailFromDb,
  findUserStatsFromDb,
  findAdminStatsFromDb,
  deleteOrder,
};
