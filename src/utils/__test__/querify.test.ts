import querify from "../querify";

test("utils/querify", () => {
  // arrage
  const input = {
    name: "sambath",
    sort: {
      createdAt: -1,
    },
  };
  const expectedResult = {
    filters: { name: "sambath" },
    select: {},
    options: { skip: 0, limit: 25, sort: { createdAt: -1 } },
  };

  // act
  const output = querify(input);

  console.log(output);
  // assert
  expect(output).toEqual(expectedResult);
});
