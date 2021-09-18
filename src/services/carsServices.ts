import Car from "../models/car"
import { ICar } from "src/types"

const getCars = async ():Promise<ICar[]> => {
  const cars = await Car.find({}).limit(10)
  return cars
}

export default {
  getCars
}