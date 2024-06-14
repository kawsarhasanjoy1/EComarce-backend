import { Router } from "express";
import { userController } from "./controller";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../../constance/constance";

const userRouter = Router();
userRouter.post("/create-user",auth(USER_ROLE.user), userController.createUser);
userRouter.get("/users",auth(USER_ROLE.admin,USER_ROLE.superAdmin), userController.findDataFromDb);
userRouter.get("/user/:id", userController.findSingleDataFromDb);
userRouter.patch("/update-user/:id", userController.upUser);
userRouter.delete("/delete-user/:id", userController.deleteUser);

export default userRouter;
