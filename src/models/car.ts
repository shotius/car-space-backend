import {Schema, model} from 'mongoose'
import { ICar } from 'src/types'

const carSchema = new Schema<ICar>({
  lotNum: String,
  make: String,
  vin: String,
  bodyStyle: String,
  secondaryDmg: String,
  locState: String,
  hasKey: String,
  repairCost: String,
  modelGroup: String,
  modelDetail: String,
  engine: String,
  damageDesc: String,
  transmision: String,
  imgThumb: String,
  imgUrl: String,
}, {collection: "cars"})

export default model<ICar>("Car", carSchema)