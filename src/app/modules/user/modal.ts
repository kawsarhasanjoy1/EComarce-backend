import { Schema, model } from "mongoose";
import { TUser } from "./interface";
import bcrypt from "bcrypt";
import config from "../../../config/config";
import { USER_ROLE } from "../../constance/constance";
const userSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: [USER_ROLE.user,USER_ROLE.admin,USER_ROLE.superAdmin], default: "user" },
    // image: { type: String, required: true },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, Number(config.hash_pass));
});

const User = model<TUser>("user", userSchema);
export default User;
