import { mapFilters } from '../map_filter';

describe('utils/map_filter', () => {
  it('should return "{ }" when "{ name: "sambath", age: "18" }" passed as parameter', () => {
    const input = { name: 'sambath', age: '18' };
    const expectedResult = {
      name: { $eq: 'sambath' },
      age: { $eq: 18 },
    };

    const output = mapFilters(input);

    expect(output).toEqual(expectedResult);
  });
});
