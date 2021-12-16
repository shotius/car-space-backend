import { KeysEnum, TransmissionEnum } from "utils/constants";
import { Keys, Transmission } from "../../../shared_with_front/types/types-shared";

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isNumber = (num: unknown): num is number => {
  return !!Number(num) || num instanceof Number;
};


const isTransmission = (trans: unknown): trans is Transmission => {
  return (
    trans === TransmissionEnum.AUTOMATIC ||
    trans === TransmissionEnum.CVT ||
    trans === TransmissionEnum.MANUAL
  );
};

const isKeys = (keys: unknown): keys is Keys => {
  return keys === KeysEnum.NO || keys === KeysEnum.YES;
};



const typeChecker =  {
  isString, 
  isNumber, 
  isTransmission, 
  isKeys
}
export default typeChecker