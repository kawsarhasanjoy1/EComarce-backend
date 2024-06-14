import { Router } from "express";
import { ProductController } from "./controller";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../../constance/constance";

const productRouter = Router();

productRouter.post(
  "/product",
  auth(USER_ROLE.admin),
  ProductController.createProduct
);
productRouter.get(
  "/products",
  auth(USER_ROLE.admin),
  ProductController.findDataFromDb
);
productRouter.get("/product/:id", ProductController.findSingleDataFromDb);
productRouter.patch(
  "/update-product/:id",
  auth(USER_ROLE.admin),
  ProductController.upProduct
);
productRouter.delete(
  "/delete-product/:id",
  auth(USER_ROLE.admin, USER_ROLE.user),
  ProductController.deleteProduct
);

export default productRouter;
