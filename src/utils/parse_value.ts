import { Types } from 'mongoose';
import { isNotANumber } from "./is_not_a_number";
import { isValidId } from './index';

type ParseValueReturn = string | number | boolean | Types.ObjectId | Date

export const parseValue = (v: string): ParseValueReturn => {
    if (v === 'true') return true;
    else if (v === 'false') return false;
    else if (isValidId(v)) return new Types.ObjectId(v);
  
    return !isNotANumber(v) ? Number(v) : Date.parse(v) ? new Date(v) : v;
  };