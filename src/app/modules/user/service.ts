import { TUser } from "./interface";
import User from "./modal";

const createUser = async (payload: TUser) => {
  const isExistEmail = await User.findOne({ email: payload?.email });
  if (isExistEmail) {
    throw new Error("User already exist");
  }
  const result = await User.create(payload);
  return result;
};

const findDataFromDb = async () => {
  const result = await User.find();
  return result;
};
const findAdminFromDb = async () => {
  const result = await User.find({role: 'admin'});
  return result;
};

const findSingleDataFromDb = async (id: string) => {
  const result = await User.findById(id);
  return result;
};

const upUser = async (id: string, payload: Partial<TUser>) => {
  const result = await User.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};
const upRole = async (id: string, role: any) => {
  const result = await User.findOneAndUpdate(
    { _id: id },
    { role },
    {
      new: true,
    }
  );
  return result;
};

const deleteUser = async (id: string) => {
  const result = User.findByIdAndDelete(id);
  return result;
};

export const userService = {
  createUser,
  findDataFromDb,
  findAdminFromDb,
  findSingleDataFromDb,
  upUser,
  upRole,
  deleteUser,
};
