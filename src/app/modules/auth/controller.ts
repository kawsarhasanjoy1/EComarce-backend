import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/utils/catchAsync";
import sentResponse from "../../../shared/utils/sendResponse";
import { AuthService } from "./service";

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const user = req.body;
  (user)
  const result = await AuthService.loginUser(user);
  sentResponse(res, {
    statusCode: 201,
    message: " Login successful ",
    data: result,
  });
});

const changePassword = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const password = req.body;
    const user = req.user;


    const result = await AuthService.changePassword( user, password);
    sentResponse(res, {
      statusCode: 200,
      message: "Password changed successfully",
      data: result,
    });
  }
);

export const AuthController = {
  loginUser,
  changePassword
};
