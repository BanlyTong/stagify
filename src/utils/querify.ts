const { Types } = require('mongoose')
const qs = require('qs')
const { isValidId } = require('.')

const parseValue = (v:any) => {
  if (v === 'true') return true
  else if (v === 'false') return false
  else if (isValidId(v)) return Types.ObjectId(v)
  
  return !isNaN(v) ? Number(v)
            : Date.parse(v) ? new Date(v)
            : v
}
const getNumberFilter = (value: any) => {
  if (typeof value !== 'string') return value
  const tile = value.substring(1)
  if ([' ', '+'].includes(value[0])) return { $gte: parseValue(tile) };
  else if (value[0] === '-') return { $lt: parseValue(tile) };
  else {
    return parseValue(value)
  }
}

const getRangeFilter = (range: any) => {
  let filter = {}
  const isCompareValues = range.every((v: any) => typeof v === 'string' && [' ', '+', '-'].includes(v[0]))
  if (!isCompareValues) return filter

  for (const value of range) {
    filter = {...filter, ...getNumberFilter(value)}
  }
  return filter
}

const mapFilters = (filter: any) => {
  const conditions:any = {};
  for (const key in filter) {
    if (Array.isArray(filter[key])) {
      if (filter[key].length === 2) {
        conditions[key] = getRangeFilter(filter[key])
        if (Object.keys(conditions[key]).length) continue;
      }
      conditions[key] = { $in: filter[key].map((v: any) => parseValue(v)) };
    } else {
      conditions[key] = getNumberFilter(filter[key])
    }
  }

  return conditions;
};

const mapOptions = (page: any = 1, limit: any = 25, sort = {}) => {
  limit = isNaN(limit) ? 25 : parseInt(limit, 10);
  page = isNaN(page) || page === '0' ? 1 : parseInt(page, 10);
  const skip = (page - 1) * limit;

  return { skip, limit, sort };
};

export default (query: any) => {
  const { select = {}, page, limit, sort, ...params } = qs.parse(query);

  const filters: any = mapFilters(params);
  const options: any = mapOptions(page, limit, sort);
  for (const field in select) {
    select[field] = parseInt(select[field])
  }

  return {
    filters,
    select,
    options,
  };
};
