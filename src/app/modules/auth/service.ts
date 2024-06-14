import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import User from "../user/modal";
import { TLogin, TPassword } from "./interface";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../../../config/config";

const loginUser = async (payload: TLogin) => {
  const { email, password } = payload;
  const user = await User.findOne({ email });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User dose not exist!");
  }

  const hashPassword = user?.password;
  const matchPassword = await bcrypt.compare(password, hashPassword);
  if (!matchPassword) {
    throw new AppError(httpStatus.FORBIDDEN, "Password did not match");
  }

  const userPayload = {
    id: user?._id,
    name: user?.name,
    email: user?.email,
    role: user?.role,
  };
  const token = jwt.sign(userPayload, config.access_token as string, {
    expiresIn: config.expireIn,
  });
  return {
    user: userPayload,
    token: token,
  };
};

const changePassword = async (user: JwtPayload, Password: TPassword) => {
  const isExistsId = await User.findById(user?.id);
  if (!isExistsId) {
    throw new Error(
      "Password change failed. Ensure the new password is unique and not among the last 2 used (last used on 2023-01-01 at 12:00 PM)"
    );
  }
  const role = user?.role;
  const dbRole = isExistsId?.role;
  if (role !== dbRole) {
    throw new Error("don't match role");
  }

  const isPassword = isExistsId?.password;
  const isExistsPassword = await bcrypt.compare(
    Password?.oldPassword,
    isPassword
  );
  if (!isExistsPassword) {
    throw new Error("didn't match password");
  }

  const passwordFromDb = isExistsId?.password;

  const password = Password?.newPassword;
  if (password == Password?.oldPassword) {
    throw new Error(
      "Password change failed. Ensure the new password is unique and not among the last 2 used (last used on 2023-01-01 at 12:00 PM)"
    );
  }
  const newHashPass = await bcrypt.hash(password, Number(10));
  const result = await User.findByIdAndUpdate(
    { _id: user?.id },
    { password: newHashPass }
  );

  const data = {
    _id: user?._id,
    username: isExistsId?.name,
    email: user?.email,
    role: user?.role,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  return data;
};

export const AuthService = {
  loginUser,
  changePassword,
};
