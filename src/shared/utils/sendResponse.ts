import { Response } from "express";

type TResponse<T> = {
  statusCode: number;
  message: string;
  data: T | T[] | null;
};

const sentResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data?.statusCode).json({
    success: true,
    message: data?.message,
    data: data?.data,
  });
};

export default sentResponse;
