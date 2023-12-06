import querify, { IQuery } from './querify';

import { projectize, isValidObject } from './index';

interface ISort {
  [key: string]: number;
}
export interface IStage {
  $match?: object;
  $project?: object;
  $sort?: ISort;
  $skip?: number;
  $limit?: number;
}

export function stagify(query: string | IQuery): IStage[] {
  const { filters, select, options } = querify(query);
  const { skip, limit, sort } = options;

  const stages: IStage[] = [
    {
      $match: filters,
    },
  ];

  const project = projectize(select);
  if (project) stages.push(project);

  if (sort && isValidObject(sort)) {
    for (const key in sort) {
      sort[key] = typeof sort[key] === 'string' ? parseInt(sort[key] as unknown as string) : sort[key];
    }
    stages.push({
      $sort: sort,
    });
  }

  if (options.limit || filters.page) {
    stages.push({
      $skip: typeof skip === 'string' ? parseInt(skip) : skip,
    });

    stages.push({
      $limit: typeof limit === 'string' ? parseInt(limit) : limit,
    });
  }

  return stages;
}

export default stagify;
