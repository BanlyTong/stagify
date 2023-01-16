import stagify, { IStage } from '../stagify';

describe.only('utils/stagify', () => {
  it('should return correct match and sort when pass "name=sambath&sort[createdAt]=-1"', () => {
    // arrage
    const input = 'name=sambath&sort[createdAt]=-1';
    const expectedResult = [
      { $match: { name: { $eq: 'sambath' } } },
      { $sort: { createdAt: -1 } },
      { $skip: 0 },
      { $limit: 25 },
    ];

    // act
    const output: IStage[] = stagify(input);

    // assert
    expect(output).toEqual(expectedResult);
  });

  it('should return correct match when pass "name=sambath"', () => {
    const input = "name=sambath";
    const expected = [
      { $match: { name: { $eq: 'sambath' }}},
      { $skip: 0},
      { $limit: 25 },
    ];

    const output: IStage[] = stagify(input);

    expect(output).toEqual(expected);
  });

  it('should return correct sort when pass "sort[age]=1"', () => {
    const input = "sort[age]=1";
    const expected = [
      { $match: {}},
      {
        $sort: { age: 1 }
      },
      { $skip: 0 },
      { $limit: 25 },
    ];

    const output = stagify(input);

    expect(output).toEqual(expected);
  });

  it('should return correct skip and limit when pass "page=2&limit=20"', () => {
    const input = "page=2&limit=20";
    const expected = [
      { $match: {}},
      { $skip: 20 },
      { $limit: 20 },
    ];

    const output = stagify(input);

    expect(output).toEqual(expected);
  })
});
