import { mapFilters } from '../map_filter';

describe('utils/map_filter', () => {
  it('should return "{name: { $eq: "sambath" },age: { $eq: 18 },}" when "{ name: "sambath", age: "18" }" passed as parameter', () => {
    const input = { name: 'sambath', age: '18' };
    const expectedResult = {
      name: { $eq: 'sambath' },
      age: { $eq: 18 },
    };

    const output = mapFilters(input);

    expect(output).toEqual(expectedResult);
  });

  it('should return "{ }" when "{ age: ["+18", "-24"] }" passed as parameter', () => {
    const input = { age: ['+18', '-24'] };
    const expectedResult = {
      age: { $gte: 18, $lt: 24 },
    };

    const output = mapFilters(input);

    expect(output).toEqual(expectedResult);
  });
});
