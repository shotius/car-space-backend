import { Keys, Transmission } from "../../../shared_with_front/types/types-shared";
import typeChecker from "./typeCheckers";

const parseString = (text: unknown): string => {
  if (!text || !typeChecker.isString(text)) {
    return '';
  }
  return text;
};

const parseNumber = (num: unknown): number => {
  if (!num || !typeChecker.isNumber(num)) {
    return 0;
  }
  return num;
};

const parseTransmission = (trans: unknown): Transmission => {
  if (!trans || !typeChecker.isTransmission(trans)) {
    return '';
  }
  return trans;
};

const parseKeys = (keys: unknown): Keys => {
  if (!keys || !typeChecker.isKeys(keys)) {
    return '';
  }
  return keys;
};

const typeParser = {
  parseString, 
  parseNumber, 
  parseTransmission, 
  parseKeys
}

export default typeParser