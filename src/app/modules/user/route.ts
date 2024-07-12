import { Router } from "express";
import { userController } from "./controller";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../../constance/constance";

const userRouter = Router();
userRouter.post("/create-user", userController.createUser);
userRouter.get(
  "/users",
  // auth(USER_ROLE.admin, USER_ROLE.superAdmin),
  userController.findDataFromDb
);
userRouter.get(
  "/admins",
  auth(USER_ROLE.superAdmin),
  userController.findAdminFromDb
);
userRouter.get("/user/:id", userController.findSingleDataFromDb);
userRouter.patch(
  "/update-user/:id",
  auth(USER_ROLE.admin, USER_ROLE.superAdmin, USER_ROLE.user),
  userController.upUser
);
userRouter.patch(
  "/update-role/:id",
  auth(USER_ROLE.admin, USER_ROLE.superAdmin, USER_ROLE.user),
  userController.upRole
);
userRouter.delete(
  "/delete-user/:id",
  auth(USER_ROLE.admin, USER_ROLE.superAdmin),
  userController.deleteUser
);

export default userRouter;
