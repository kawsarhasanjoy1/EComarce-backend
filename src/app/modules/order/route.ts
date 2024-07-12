import { Router } from "express";
import { OrderController } from "./controller";
import { USER_ROLE } from "../../constance/constance";
import auth from "../../middleware/auth";

const orderRouter = Router();

orderRouter.post("/order", auth(USER_ROLE.user), OrderController.createOrder);
orderRouter.get(
  "/orders",
  auth(USER_ROLE.admin, USER_ROLE.superAdmin),
  OrderController.findDataFromDb
);
orderRouter.get("/orders/:id", OrderController.findSingleDataFromDb);
orderRouter.get(
  "/orders-email/:email",
  OrderController.findDataWithEmailFromDb
);
orderRouter.get("/user-stats/:email", OrderController.findUserStatsFromDb);
orderRouter.get("/admin-stats", OrderController.findAdminStatsFromDb);
// orderRouter.delete("/delete-orders/:id", OrderController.deleteOrder);

export default orderRouter;
