import { Schema, model } from 'mongoose';
import { ICar } from '../../shared_with_front/types/types-shared';

const carSchema = new Schema<ICar>(
  {
    lN: String, // Lot number
    m: String, // Make
    vin: String, // VIN
    bSt: String, // Body Style
    sDmg: String, // Secondary Damage
    lSt: String, // Location state
    lC: String, // Location country
    od: String, // Odometer
    cyl: String, // Cylinders
    dr: String, // Drive
    eP: String, // Est. Retail Value
    curB: String, // High Bid =non-vix,Sealed=Vix
    hK: String, // Has Keys-Yes or No
    rC: String, // Repair cost
    mG: String, // Model Group
    mD: String, // Model Detail
    eng: String, // Engine
    dmg: String, // Damage Description
    trans: String, // Transmission
    imgT: String, // Image Thumbnail
    imgU: String, // Image URL
    y: String, // Year
    fuel: String, // Fuel Type
    keys: String, // Has Keys-Yes or No
    sS: String, // Sales Status
  },
  { collection: 'cars' }
);

export default model<ICar>('Car', carSchema);
