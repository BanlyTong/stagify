import querify from './querify';

import { projectize, isValidObject } from './index';

export default (query: any) => {
  const { filters, select, options } = querify(query);
  const { skip, limit, sort } = options;

  const stages: any = [
    {
      $match: filters,
    },
  ];

  const project = projectize(select);
  if (project) stages.push(project);

  if (isValidObject(sort)) {
    for (const key in sort) {
      sort[key] = parseInt(sort[key], 10);
    }
    stages.push({
      $sort: sort,
    });
  }

  if (query.limit || query.page) {
    stages.push({
      $skip: skip,
    });

    stages.push({
      $limit: limit,
    });
  }
  return stages;
};
