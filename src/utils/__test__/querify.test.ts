import querify from '../querify';

describe('utils/querify', () => {
  // string and number filter
  it('should return { name:"sambath, age: 18 } when "name=sambath&age=18" passed as parameter', () => {
    // arrage
    const input = 'name=sambath&age=18';
    const expectedResult = {
      filters: { name: { $eq: 'sambath' }, age: { $eq: 18 } },
      select: {},
      options: { skip: 0, limit: '25', sort: {} },
    };

    // act
    const output = querify(input);

    // assert
    expect(output).toEqual(expectedResult);
  });

  // pagination
  it('should return correct skip=0&limit=10 when pass "page=1&limit=10" as parameter', () => {
    // arrage
    const input = 'page=1&limit=10';
    const expected = {
      filters: {},
      select: {},
      options: {
        skip: 0,
        limit: '10',
        sort: {},
      },
    };

    // act
    const output = querify(input);

    // assert
    expect(output).toEqual(expected);
  });

  // pagination
  it('should return correct skip=25 when pass "page=2" as parameter', () => {
    // arrage
    const input = 'page=2';
    const expected = {
      filters: {},
      select: {},
      options: {
        skip: 25,
        limit: '25',
        sort: {},
      },
    };

    // act
    const output = querify(input);

    // assert
    expect(output).toEqual(expected);
  });

  // pagination
  it('should return correct skip=25 when pass "page=2" as parameter', () => {
    // arrage
    const input = 'page=2';
    const expected = {
      filters: {},
      select: {},
      options: {
        skip: 25,
        limit: '25',
        sort: {},
      },
    };

    // act
    const output = querify(input);

    // assert
    expect(output).toEqual(expected);
  });

  // select
  it('should return correct select when pass "select[name]=1"', () => {
    const input = 'select[name]=1';
    const expected = {
      filters: {},
      select: {
        name: 1,
      },
      options: {
        skip: 0,
        limit: '25',
        sort: {},
      },
    };

    // act
    const output = querify(input);

    // assert
    expect(output).toEqual(expected);
  });

  it('should return correct sort when pass "sort[age]=-1', () => {
    const input = 'sort[age]=-1';
    const expected = {
      filters: {},
      select: {},
      options: {
        skip: 0,
        limit: '25',
        sort: { age: '-1' },
      },
    };

    const output = querify(input);

    expect(output).toEqual(expected);
  });
});
