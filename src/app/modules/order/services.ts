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
  const result = await Order.find({ email });
  return result;
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
  deleteOrder,
};
