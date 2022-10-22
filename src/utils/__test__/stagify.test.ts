import stagify, { IStage } from '../stagify';

describe.only('utils/stagify', () => {
  it('should return when', () => {
    // arrage
    const input = 'name=sambath&sort[createdAt]=-1"';
    const expectedResult = [
      { $match: { name: { $eq: 'sambath' } } },
      { $sort: { createdAt: -1 } },
      { $skip: 0 },
      { $limit: 25 },
    ];

    // act
    const output: IStage[] = stagify(input);
    console.log(output);

    // assert
    expect(output).toEqual(expectedResult);
  });
});
