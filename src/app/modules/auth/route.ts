import { Router } from "express";

import auth from "../../middleware/auth";
import { USER_ROLE } from "../../constance/constance";
import { AuthController } from "./controller";

const loginRouter = Router();

loginRouter.post("/login", AuthController.loginUser);
loginRouter.post(
  "/change-password",
  auth(USER_ROLE.user, USER_ROLE.admin),
  AuthController.changePassword
);

export default loginRouter;
