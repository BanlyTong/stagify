import { getNumberFilter } from './get_number_filter';
import { getRangeFilter } from './get_range_filter';
import { parseValue } from './parse_value';

export interface IFilter {
  [key: string]: string | string[];
}

export interface ICondition {
  [key: string]: any;
}

export const mapFilters = (filter: IFilter): ICondition => {
  const conditions: ICondition = {};
  for (const key in filter) {
    if (Array.isArray(filter[key])) {
      if (filter[key].length === 2) {
        conditions[key] = getRangeFilter(filter[key] as string[]);
        if (Object.keys(conditions[key] as object).length) continue;
      }
      const items = Array(filter[key]).map((v: any) => parseValue(v as string) as string);
      conditions[key] = { $in: items };
    } else {
      conditions[key] = getNumberFilter(filter[key] as string);
    }
  }

  return conditions;
};
