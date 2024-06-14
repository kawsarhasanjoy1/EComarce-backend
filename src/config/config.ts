import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  mongodb_url: process.env.MONGODB_URL,
  hash_pass: process.env.HASH_PASS,
  access_token: process.env.ACCESS_TOKEN,
  expireIn: process.env.EXPIREIN,
  node_env: process.env.NODE_ENV
};
