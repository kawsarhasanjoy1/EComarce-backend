import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/utils/catchAsync";
import { ReviewService } from "./service";
import sentResponse from "../../../shared/utils/sendResponse";

const createReview = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const result = await ReviewService.createReview(data);

    sentResponse(res, {
      statusCode: 201,
      message: "Review created successful",
      data: result,
    });
  }
);
const findDataFromDb = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await ReviewService.findDataFromDb();
    sentResponse(res, {
      statusCode: 201,
      message: "Review retrieve successful",
      data: result,
    });
  }
);
const findSingleDataFromDb = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const result = await ReviewService.findSingleDataFromDb(id);
    sentResponse(res, {
      statusCode: 201,
      message: "Single Review retrieve successful",
      data: result,
    });
  }
);

const deleteReview = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const result = await ReviewService.deleteReview(id);
    sentResponse(res, {
      statusCode: 201,
      message: "Review deleted successful",
      data: result,
    });
  }
);

export const ReviewController = {
  createReview,
  findDataFromDb,
  findSingleDataFromDb,
  deleteReview,
};
