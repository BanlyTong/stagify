const { ObjectId } = require('mongoose').Types;

export const lean = (data: any) => JSON.parse(JSON.stringify(data));

export const isValidObject = (obj: any) => obj !== null && typeof obj === 'object' && Object.keys(obj).length > 0;

export const projectize = (select: any) => {
  if (isValidObject(select)) {
    for (const key in select) {
      select[key] = parseInt(select[key], 10);
    }
    return {
      $project: select,
    };
  } else {
    return null;
  }
};

export const isValidId = (id: string) => ObjectId.isValid(id) && String(new ObjectId(id)) === id;
