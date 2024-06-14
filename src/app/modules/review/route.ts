import { Router } from "express";
import { ReviewController } from "./controller";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../../constance/constance";

const reviewRouter = Router();

reviewRouter.post("/review", ReviewController.createReview);
reviewRouter.get(
  "/review",
  auth(USER_ROLE.admin, USER_ROLE.superAdmin),
  ReviewController.findDataFromDb
);
reviewRouter.get("/review/:id", ReviewController.findSingleDataFromDb);
reviewRouter.delete(
  "/delete-review",
  auth(USER_ROLE.admin, USER_ROLE.superAdmin),
  ReviewController.deleteReview
);

export default reviewRouter;
