import express from "express";
import cors from "cors";
import router from "./app/routes/route";
import notFound from "./app/middleware/notFount";
import GlobalErrorHandler from "./app/middleware/GlobalErrorHandler";
export const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(router);
app.use(notFound);
app.use(GlobalErrorHandler);
