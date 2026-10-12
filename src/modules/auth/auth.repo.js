import { User } from "../../DB/model/user.model.js";

export async function getUserByEmail(email) {
  return await User.findOne({ email });
}

export async function createUser(data) {
  return await User.create(data);
}
