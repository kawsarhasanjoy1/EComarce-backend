import { Router } from "express";
import userRouter from "../modules/user/route";
import productRouter from "../modules/addProduct/route";
import reviewRouter from "../modules/review/route";
import orderRouter from "../modules/order/route";
import loginRouter from "../modules/auth/route";

const router = Router();

const RoutePath = [
  {
    path: "/api/v1",
    route: userRouter,
  },
  {
    path: "/api/v1",
    route: productRouter,
  },
  {
    path: "/api/v1",
    route: reviewRouter,
  },
  {
    path: "/api/v1",
    route: orderRouter,
  },
  {
    path: "/api/v1",
    route: loginRouter,
  },
];

RoutePath.map((route) => router.use(route.path, route.route));

export default router;
