import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/utils/catchAsync";
import { userService } from "./service";
import sentResponse from "../../../shared/utils/sendResponse";

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const result = await userService.createUser(data);

    const user = {
      _id: result?._id,
      name: result.name,
      email: result.email,
      role: result.role,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    sentResponse(res, {
      statusCode: 201,
      message: "User created successful",
      data: user,
    });
  }
);
const findDataFromDb = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await userService.findDataFromDb();
    sentResponse(res, {
      statusCode: 201,
      message: "User retrieve successful",
      data: result,
    });
  }
);
const findAdminFromDb = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await userService.findAdminFromDb();
    sentResponse(res, {
      statusCode: 201,
      message: "User retrieve successful",
      data: result,
    });
  }
);
const findSingleDataFromDb = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const result = await userService.findSingleDataFromDb(id);
    sentResponse(res, {
      statusCode: 201,
      message: "Single user retrieve successful",
      data: result,
    });
  }
);
const upUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const user = req.body;
    const result = await userService.upUser(id, user);
    sentResponse(res, {
      statusCode: 201,
      message: "User updated successful",
      data: result,
    });
  }
);
const upRole = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const { role } = req.body;
    const result = await userService.upRole(id, role);
    sentResponse(res, {
      statusCode: 201,
      message: "User role updated successful",
      data: result,
    });
  }
);
const deleteUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const result = await userService.deleteUser(id);
    sentResponse(res, {
      statusCode: 201,
      message: "User deleted successful",
      data: result,
    });
  }
);

export const userController = {
  createUser,
  findDataFromDb,
  findAdminFromDb,
  findSingleDataFromDb,
  upUser,
  upRole,
  deleteUser,
};
