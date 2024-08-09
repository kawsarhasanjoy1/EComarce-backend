import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/utils/catchAsync";
import sentResponse from "../../../shared/utils/sendResponse";
import { ProductService } from "./service";

const createProduct = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    data;
    const result = await ProductService.createProduct(data);

    sentResponse(res, {
      statusCode: 201,
      message: "Product created successful",
      data: result,
    });
  }
);
const findDataFromDb = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await ProductService.findDataFromDb(req);
    sentResponse(res, {
      statusCode: 200,
      message: "Product retrieve successful",
      data: result,
    });
  }
);
const findSortProductWithTopRating = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await ProductService.findSortProductWithTopRating();
    sentResponse(res, {
      statusCode: 200,
      message: "Top product retrieve successful",
      data: result,
    });
  }
);
const findDataFromDbIsFlash = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await ProductService.findDataFromDbIsFlash();
    sentResponse(res, {
      statusCode: 200,
      message: "Flash sale retrieve successful",
      data: result,
    });
  }
);
const findSingleDataFromDb = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const result = await ProductService.findSingleDataFromDb(id);
    sentResponse(res, {
      statusCode: 200,
      message: "Single Product retrieve successful",
      data: result,
    });
  }
);
const upProduct = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const Product = req.body;
    const result = await ProductService.upProduct(id, Product);
    sentResponse(res, {
      statusCode: 200,
      message: "Product updated successful",
      data: result,
    });
  }
);
const deleteProduct = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const result = await ProductService.deleteProduct(id);
    sentResponse(res, {
      statusCode: 200,
      message: "Product deleted successful",
      data: result,
    });
  }
);

export const ProductController = {
  findDataFromDbIsFlash,
  createProduct,
  findDataFromDb,
  findSingleDataFromDb,
  findSortProductWithTopRating,
  upProduct,
  deleteProduct,
};
