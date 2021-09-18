import User from "../models/user";
import { IUser } from "src/types";

const getUsers = async (): Promise<IUser[]> => {
  const users = await User.find({})
  return users
}

export default {
  getUsers
}

