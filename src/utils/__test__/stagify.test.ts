import stagify from '../stagify';

test('utils/stagify', () => {
  // arrage
  const input = {
    name: 'sambath',
    sort: {
      createdAt: -1,
    },
  };
  const expectedResult = [{ $match: { name: 'sambath' } }, { $sort: { createdAt: -1 } }];

  // act
  const output = stagify(input);
  console.log(output);

  // assert
  expect(output).toEqual(expectedResult);
});
