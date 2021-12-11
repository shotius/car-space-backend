import { model, Schema } from 'mongoose';
import { ICarCopart } from '../../shared_with_front/types/types-shared';

const carSchema = new Schema<ICarCopart>(
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
    curB: String, // High Bid =non-vix,Sealed=Vix
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
    eRV: String, // Est. Retail Value
    rC: String, // Repair Cost
    c: String,  // Color
    rd: String,  // Runs and drive
    bin: String,  // buy it now
    imgsM: [String]
  },
  { collection: 'cars' }
);

carSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    // returnedObject.id = returnedObject._id.toString();
    // delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const CarCopart = model<ICarCopart>('Car', carSchema);
export default CarCopart
