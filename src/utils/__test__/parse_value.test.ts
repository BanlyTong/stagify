import { Types } from 'mongoose';
import { parseValue } from '../parse_value';

describe('utils/parse_value', () => {
  it('should return { $eq: "sambath" } when "sambath" passed as parameter', () => {
    const input = 'sambath';
    const expectedResult = 'sambath';

    const output = parseValue(input);

    expect(output).toEqual(expectedResult);
  });

  it('should return true when "true" passed as parameter', () => {
    const input = 'true';
    const expectedResult = true;

    const output = parseValue(input);

    expect(output).toEqual(expectedResult);
  });

  it('should return false when "false" passed as parameter', () => {
    const input = 'false';
    const expectedResult = false;

    const output = parseValue(input);

    expect(output).toEqual(expectedResult);
  });

  it('should return object id when passed "6400db862385c50822219be3" as parameter', () => {
    const input = '6400db862385c50822219be3';
    const expectedResult = new Types.ObjectId('6400db862385c50822219be3');

    const output = parseValue(input);

    expect(output).toEqual(expectedResult);
  });
});
