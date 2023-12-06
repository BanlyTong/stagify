import querify from '../querify';

describe('utils/querify', () => {
  it('should return { name:"sambath, age: 18 } when "name=sambath&age=18" passed as parameter', () => {
    // arrage
    const input = 'name=sambath&age=18';
    const expectedResult = {
      filters: { name: { $eq: 'sambath' }, age: { $eq: 18 } },
      select: {},
      options: { skip: 0, limit: "25", sort: { } },
    };

    // act
    const output = querify(input);

    // assert
    expect(output).toEqual(expectedResult);
  });
});
