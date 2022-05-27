import { model, Schema } from 'mongoose';
import { ICarCopart } from '../../shared_with_front/types/types-shared';

const carSchema = new Schema<ICarCopart>(
  {
    lN: Number, // Lot number
    m: String, // Make
    vin: String, // VIN
    bSt: String, // Body Style
    sDmg: String, // Secondary Damage
    lSt: String, // Location state
    lC: String, // Location country
    od: Number, // Odometer
    cyl: Number, // Cylinders
    dr: String, // Drive
    curB: Number, // High Bid =non-vix,Sealed=Vix
    mG: String, // Model Group
    mD: String, // Model Detail
    eng: Number, // Engine
    dmg: String, // Damage Description
    trans: String, // Transmission
    imgT: String, // Image Thumbnail
    imgU: String, // Image URL
    y: Number, // Year
    fuel: String, // Fuel Type
    keys: String, // Has Keys-Yes or No
    sS: String, // Sales Status
    eRV: Number, // Est. Retail Value
    rC: Number, // Repair Cost
    c: String,  // Color
    rd: String,  // Runs and drive
    bin: Number,  // buy it now
    imgsM: [String]
  },
  { collection: 'copart_cars' }
);

carSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    // returnedObject.id = returnedObject._id.toString();
    // delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export default model<ICarCopart>('CopartCar', carSchema);
