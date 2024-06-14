/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler, json } from "express";
import mongoose from "mongoose";
import HandleMongoose from "./HandleMongoose";
import HandleCostError from "./HandleCostError";
import config from "../../config/config";

const GlobalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = err?.message || "something went wrong";
  let errorMessage = err?.message || "something went wrong";
  console.log(err?.message)
  if (err?.code == 11000) {
    const simplified = HandleMongoose(err);
    message = simplified?.message;
    errorMessage = simplified?.errorMessage;
  } else if (err?.name == "CastError") {
    const simplified = HandleCostError(err);
    message = simplified?.message;
    errorMessage = simplified?.errorMessage;
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    errorDetails: err,
    stack: config.node_env === "development" ? err?.stack : "",
  });
};

export default GlobalErrorHandler;
