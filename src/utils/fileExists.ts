import fs from 'fs';
import { PATH_TO_CAR_DATA } from './constants';

export const fileExists = () => {
  const path = `${PATH_TO_CAR_DATA}/DotNETFrameworkNotesForProfessionals.pdf.pdf`;

  if (fs.existsSync(path)) {
    // path exists
    return true;
  } else {
    return false;
  }
};

export const listFiles = () => {
  const testFolder = './';

  fs.readdirSync(testFolder).forEach((file) => {
    console.log(file);
  });
};
