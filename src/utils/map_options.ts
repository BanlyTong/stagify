import { isNotANumber } from "./is_not_a_number";

export const mapOptions = (page = "1", limit = "25", sort = {}) => {
  const validLimit = isNotANumber(limit) ? 25 : parseInt(limit, 10);
  const validPage = isNotANumber(page) || page === '0' ? 1 : parseInt(page, 10);
  const skip = (validPage - 1) * validLimit;

  return { skip, limit, sort };
};
