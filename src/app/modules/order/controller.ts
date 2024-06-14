import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/utils/catchAsync";
import sentResponse from "../../../shared/utils/sendResponse";
import { OrderService } from "./services";

const createOrder = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const result = await OrderService.createOrder(data);

    sentResponse(res, {
      statusCode: 201,
      message: "Order created successful",
      data: result,
    });
  }
);
const findDataFromDb = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await OrderService.findDataFromDb();
    sentResponse(res, {
      statusCode: 201,
      message: "Order retrieve successful",
      data: result,
    });
  }
);
const findSingleDataFromDb = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const result = await OrderService.findSingleDataFromDb(id);
    sentResponse(res, {
      statusCode: 201,
      message: "Single Order retrieve successful",
      data: result,
    });
  }
);
const findDataWithEmailFromDb = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const email = req.params.email;
    const result = await OrderService.findSingleDataFromDb(email);
    sentResponse(res, {
      statusCode: 201,
      message: " Order retrieve successful with email",
      data: result,
    });
  }
);

const deleteOrder = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const result = await OrderService.deleteOrder(id);
    sentResponse(res, {
      statusCode: 201,
      message: "Order deleted successful",
      data: result,
    });
  }
);

export const OrderController = {
  createOrder,
  findDataFromDb,
  findSingleDataFromDb,
  deleteOrder,
  findDataWithEmailFromDb,
};
