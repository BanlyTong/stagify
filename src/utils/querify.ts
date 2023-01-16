import * as qs from 'qs';
import { ICondition, IFilter, mapFilters } from './map_filter';
import { mapOptions } from './map_options';

export interface IProject {
  [key: string]: number
}

interface IFilters {
  [key: string]: object;
}

interface ISort {
  [key: string]: number
}
interface IOption {
  sort?: ISort
  limit?: number | string
  skip?: number | string
}

export interface IQuerify {
  filters: IFilters
  select: IProject
  options: IOption
}

export default (query: string): IQuerify => {
  const { select, page, limit, sort, ...params }:any = qs.parse(query);
  
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const filters: ICondition = mapFilters(params as IFilter);
  const options = mapOptions(page as string, limit as string, sort as string);
  const project: IProject = {};
  for (const field in select) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    project[field] = parseInt(select[field] as string, 10);
  }

  return {
    filters,
    select: project,
    options,
  };
};
