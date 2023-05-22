import { Types } from 'mongoose';
import { IObject } from '../types';
const { ObjectId } = Types;

export const lean = (data: any): any => JSON.parse(JSON.stringify(data));

export const isValidObject = (obj: IObject) => obj !== null && typeof obj === 'object' && Object.keys(obj).length > 0;
interface ISelect {
  [key: string]: string | number | boolean; // you could set more explicit headers names or even remove the above and set just this line
}

export const projectize = (select: ISelect) => {
  if (isValidObject(select)) {
    for (const key in select) {
      select[key] = typeof select[key] === 'string' ? parseInt(select[key] as string, 10) : 0;
    }
    return {
      $project: select,
    };
  } else {
    return null;
  }
};

export const isValidId = (id: string): boolean => ObjectId.isValid(id) && String(new ObjectId(id)) === id;
