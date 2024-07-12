import { Router } from "express";
import { paymentController } from "./controller";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../../constance/constance";

const paymentRouter = Router();

paymentRouter.post(
  "/create-payment-intent",
  auth(USER_ROLE.user),
  paymentController.createPayment
);

export default paymentRouter;
