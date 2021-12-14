import { ICarDealer } from './../../shared_with_front/types/types-shared.d';
import { model, Schema } from 'mongoose';

const schemaCarDealer = new Schema<ICarDealer>({
  m: String, // Manufacturer
  bSt: String, // Body Style
  dmg: String, // Damage Description
  sDmg: String, // Secondary Damage
  lC: String, // Location country
  od: String, // Odometer
  cyl: String, // Cylinders
  dr: String, // Drive
  mG: String, // Model Group
  mD: String, // Model Detail
  eng: Number, // Engine
  trans: String, // Transmission
  imgT: String, // Image Thumbnail
  imgUrls: [String], // Image URL
  y: String, // Year
  fuel: String, // Fuel Type
  keys: String, // Has Keys-Yes or No
  c: String, // Color
  price: String, // Buy it now
  desc: String
});

schemaCarDealer.set('toJSON', {
  transform: (_document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id
    delete returnedObj.__v;
  },
});

const CarDealer = model<ICarDealer>('carDealer', schemaCarDealer);
export default CarDealer
