import { ICar } from "types"
import Car from "../models/car"

const getCars = async ():Promise<ICar[]> => {
  const cars = await Car.find({}).limit(10)
  return cars
}

export default {
  getCars
}