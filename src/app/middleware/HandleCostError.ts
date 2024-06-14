import mongoose from "mongoose";

const HandleCostError = (err: mongoose.Error.CastError) => {
  const statusCode = 400 as number;
  const message = "Invalid ID" as string;
  const invalidId = err.message.match(/\"([a-f0-9]+)\"/);
  const errorMessage = invalidId ? `${invalidId[1]} is not valid id` : "";

  return {
    statusCode,
    message,
    errorMessage,
  };
};

export default HandleCostError;
