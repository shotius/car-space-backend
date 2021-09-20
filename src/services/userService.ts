import { IUser } from "types";
import User from "../models/user";
import { getBooks } from '../utils/fileScraper'

const startScrape = async () => {
  try {
    return await getBooks()
  } catch (error) {
    return false
  }
}

const getUsers = async (): Promise<IUser[]> => {
  const users = await User.find({})
  return users
}

export default {
  getUsers,
  startScrape,
}

