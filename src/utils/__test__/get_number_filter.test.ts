import { getNumberFilter } from '../get_number_filter';

describe('utils/get_number_filter', () => {
  it('should return { $eq: "sambath" } when "sambath" passed as parameter', () => {
    const input = 'sambath';
    const expectedResult = {
      $eq: 'sambath',
    };

    const output = getNumberFilter(input);

    expect(output).toEqual(expectedResult);
  });
});
