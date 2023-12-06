import * as qs from 'qs';
import { ICondition, IFilter, mapFilters } from './map_filter';
import { mapOptions } from './map_options';

export interface IProject {
  [key: string]: number | boolean;
}

interface IFilters {
  [key: string]: object;
}

interface ISort {
  [key: string]: number;
}
interface IOption {
  sort?: ISort;
  limit?: number | string;
  skip?: number | string;
}

export interface IQuerify {
  filters: IFilters;
  select: IProject;
  options: IOption;
}

export interface IQuery {
  select: IProject;
  page: number;
  sort: ISort;
  limit: number;
  [key: string]: IProject | number | ISort | string | string[];
}

export function querify(q: string | IQuery): IQuerify {
  let query;
  if (typeof q === 'string') {
    query = qs.parse(q);
  } else {
    query = q;
  }

  const { select, page, limit, sort, ...params } = query;

  const filters: ICondition = mapFilters(params as IFilter);
  const options = mapOptions(page as string, limit as string, sort as string);
  const project: IProject = {};

  if (typeof select === 'object' && !Array.isArray(select)) {
    for (const field in select) {
      if (typeof select[field] === 'string') {
        const str = select[field];
        if (typeof str === 'string') {
          project[field] = parseInt(str, 10);
        }
      }
    }
  }

  return {
    filters,
    select: project,
    options,
  };
}

export default querify;
