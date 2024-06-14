import { app } from "./app";
import superAdmin from "./app/DB/superAdmin";
import User from "./app/modules/user/modal";
import config from "./config/config";
import mongoose from "mongoose";
const port = 3000;

async function main() {
  try {
    await mongoose.connect(config.mongodb_url as string);
    app.listen(config.port, () => {
      superAdmin();
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
