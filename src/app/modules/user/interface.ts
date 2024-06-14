import { USER_ROLE } from "../../constance/constance";

export type TUser = {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin" | 'superAdmin';
  image: string;
};

export type TUserRole = keyof typeof USER_ROLE;