import * as qs from 'qs';

describe('utils/querify', () => {
  it('should return { name: "sambath } when "name=sambath" passed as parameter', () => {
    const input = 'name=sambath';
    const expectedResult = {
      name: 'sambath',
    };

    // act
    const output = qs.parse(input);

    // assert
    expect(output).toEqual(expectedResult);
  });

  it('should return "sort" when "sort[createdAt]=-1" passed as parameter', () => {
    const input = 'sort[createdAt]=-1';
    const expectedResult = {
      sort: {
        createdAt: '-1',
      },
    };

    // act
    const output = qs.parse(input);

    // assert
    expect(output).toEqual(expectedResult);
  });

  // %2B = +
  it('should include "range" when "age[]=%2B5&age[]=-18" passed as parameter', () => {
    const input = 'age[]=%2B5&age[]=-18';
    const expectedResult = {
      age: ['+5', '-18'],
    };

    // act
    const output = qs.parse(input);

    // assert
    expect(output).toEqual(expectedResult);
  });

  it('should include "select" when "select[name]=1&select[createdAt]=1&select[age]=1" passed as parameter', () => {
    const input = 'select[name]=1&select[createdAt]=1&select[age]=1';
    const expectedResult = {
      select: {
        name: '1',
        createdAt: '1',
        age: '1',
      },
    };

    // act
    const output = qs.parse(input);

    // assert
    expect(output).toEqual(expectedResult);
  });
});
