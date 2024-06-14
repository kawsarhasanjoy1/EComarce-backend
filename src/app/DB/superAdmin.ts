import { USER_ROLE } from "../constance/constance";
import User from "../modules/user/modal";

const superUser = {
  name: "Md Kawsar",
  email: "kawsarhasanjoy342@gmail.com",
  role: USER_ROLE.superAdmin,
  password: "123456",
  image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357",
};

const superAdmin = async () => {
  const isExistsUser = await User.findOne({ role: USER_ROLE.superAdmin });
  if (!isExistsUser) {
    await User.create(superUser);
  }
};

export default superAdmin
