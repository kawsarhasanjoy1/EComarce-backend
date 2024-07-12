import { Request, Response } from "express";
import catchAsync from "../../../shared/utils/catchAsync";
import { paymentServices } from "./service";

const createPayment = catchAsync(async (req: Request, res: Response) => {
  const { price } = req.body;
  const result = await paymentServices.createPayment(price);
  res.send({
    clientSecret: result,
  });
});

export const paymentController = {
  createPayment,
};
