import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import catchAsync from "../../shared/utils/catchAsync";
import config from "../../config/config";
import User from "../modules/user/modal";
import { TUserRole } from "../modules/user/interface";

const auth = (...Role: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new Error("Unauthorize user");
    }

    const decoded = jwt.verify(
      token,
      config.access_token as string
    ) as JwtPayload;
    console.log(decoded);
    const { id, email, role, iat } = decoded as JwtPayload;
    const userName = await User.findOne({ _id: id });
    const userEmail = await User.findOne({ email });

    if (!userName) {
      throw new Error("Unauthorize user");
    }

    if (!userEmail) {
      throw new Error("Unauthorize user check your email");
    }

    if (Role && !Role.includes(role)) {
      throw new Error("Unauthorize user");
    }

    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;
