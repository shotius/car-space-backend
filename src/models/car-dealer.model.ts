import { ICarDealer } from './../../shared_with_front/types/types-shared.d';
import { model, Schema } from 'mongoose';

const schemaCarDealer = new Schema<ICarDealer>({
  m: String, // Manufacturer
  bSt: String, // Body Style
  dmg: String, // Damage Description
  sDmg: String, // Secondary Damage
  lC: String, // Location country
  desc: String,
  dr: String, // Drive
  mG: String, // Model Group
  mD: String, // Model Detail
  trans: String, // Transmission
  imgT: String, // Image Thumbnail
  imgUrls: [String], // Image URL
  fuel: String, // Fuel Type
  keys: String, // Has Keys-Yes or No
  c: String, // Color
  y: Number, // Year
  od: Number, // Odometer
  cyl: Number, // Cylinders
  price: Number, // Buy it now
  eng: Number, // Engine
  mostDemand: Boolean,
  dealername: String,
  dealerId: String,
});

schemaCarDealer.set('toJSON', {
  transform: (_document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
  },
});

export default model<ICarDealer>('carDealer', schemaCarDealer);
