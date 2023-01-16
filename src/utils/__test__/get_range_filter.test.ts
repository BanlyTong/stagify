import { getRangeFilter } from '../get_range_filter'

describe('utils/get_range_filter', () => {
    it('should return { $gte: 1, $lt: 5 } when pass [" 1","-5"]', () => {
        const input = [" 1","-5"];
        const expected = { $gte: 1, $lt: 5 };

        const result = getRangeFilter(input);

        expect(result).toEqual(expected);
    })
})
