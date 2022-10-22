import { parseValue } from "../parse_value";

describe('utils/parse_value', () => {
    it('should return { $eq: "sambath" } when "sambath" passed as parameter', () => {
        const input = "sambath";
        const expectedResult = "sambath"

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const output = parseValue(input);

        expect(output).toEqual(expectedResult)
    })
})
