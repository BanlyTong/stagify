const { ObjectId } = require('mongoose').Types;

const lean = (data) => JSON.parse(JSON.stringify(data));

const isValidObject = (obj) => (
  obj !== null && typeof obj === 'object' && Object.keys(obj).length > 0
);

const projectize = (select) => {
  if (isValidObject(select)) {
    for (const key in select) {
      select[key] = parseInt(select[key], 10);
    }
    return {
      $project: select
    };
  } else {
    return null;
  }
}

const isValidId = (id) => ObjectId.isValid(id) && String(new ObjectId(id)) === id

module.exports = {
  lean,
  response,
  projectize,
  isValidObject,
  isValidId,
}
