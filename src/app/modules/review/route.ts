import { Router } from "express";
import { ReviewController } from "./controller";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../../constance/constance";

const reviewRouter = Router();

reviewRouter.post("/review", ReviewController.createReview);
reviewRouter.get("/reviews", ReviewController.findDataFromDb);
reviewRouter.get(
  "/admin-reviews",
  auth(USER_ROLE.admin, USER_ROLE.superAdmin),
  ReviewController.findDataFromDbForAdmin
);
reviewRouter.get("/review/:id", ReviewController.findSingleDataFromDb);
reviewRouter.get(
  "/user-review/:id",
  auth(USER_ROLE.user),
  ReviewController.findSingleReviewWithUserId
);
reviewRouter.delete(
  "/delete-review",
  auth(USER_ROLE.admin, USER_ROLE.superAdmin),
  ReviewController.deleteReview
);

export default reviewRouter;
