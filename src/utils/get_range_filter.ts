import { getNumberFilter } from './get_number_filter';

export const getRangeFilter = (range: string[]): object => {
  let filter: object = {};
  const isCompareValues = range.every((v: string) => typeof v === 'string' && [' ', '+', '-'].includes(v[0]));
  if (!isCompareValues) return filter;

  for (const value of range) {
    const numberFilter = getNumberFilter(value);

    filter = {
      ...filter,
      ...numberFilter,
    };
  }
  return filter;
};
