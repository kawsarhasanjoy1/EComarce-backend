/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from "http-status";

import { NextFunction, Request, Response } from "express";

const notFound = (req: Request, res: Response) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: `${req.originalUrl} api not found`,
  });
};

export default notFound;
