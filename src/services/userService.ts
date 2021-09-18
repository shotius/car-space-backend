import { IUser } from "types";
import User from "../models/user";
// import { IUser } from "types";

const getUsers = async (): Promise<IUser[]> => {
  const users = await User.find({})
  return users
}

export default {
  getUsers
}

