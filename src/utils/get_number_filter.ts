import { parseValue } from './parse_value';

export const getNumberFilter = (value: string): object => {
  const tile = value.substring(1);
  if ([' ', '+'].includes(value[0])) return { $gte: parseValue(tile) as number };
  else if (value[0] === '-') return { $lt: parseValue(tile) as number };
  else {
    console.log({ value });
    return { $eq: parseValue(value) as string };
  }
};
