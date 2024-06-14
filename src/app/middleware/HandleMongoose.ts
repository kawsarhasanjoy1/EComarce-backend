/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
const HandleMongoose = (err: { keyValue: any; message: any }) => {
  let message = "Duplicate error" as string;
  let errorMessage = err?.keyValue as string;
  let errorDetails = err as any;
  return {
    message,
    errorMessage,
    errorDetails,
  };
};

export default HandleMongoose;
