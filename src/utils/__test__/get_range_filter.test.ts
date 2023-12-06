import { getRangeFilter } from '../get_range_filter';

describe('utils/get_range_filter', () => {
  it('should return { $gte: 10, $lt: 20 } when ["+10", "-20"] passed as parameter', () => {
    const input = ['+10', '-20'];
    const expectedResult = {
      $gte: 10,
      $lt: 20,
    };

    const output = getRangeFilter(input);

    expect(output).toEqual(expectedResult);
  });

  it('should return { $gte: 12 } when ["+12"] passed as parameter', () => {
    const input = ['+12'];
    const expectedResult = {
      $gte: 12,
    };

    const output = getRangeFilter(input);

    expect(output).toEqual(expectedResult);
  });
});

describe('utils/get_range_filter', () => {
    it('should return { $gte: 1, $lt: 5 } when pass [" 1","-5"]', () => {
        const input = [" 1","-5"];
        const expected = { $gte: 1, $lt: 5 };

        const result = getRangeFilter(input);

        expect(result).toEqual(expected);
    })
})
