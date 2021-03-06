import { format, d } from 'udate';

describe('d', () => {
    test('day of the mounth without leading zero', () => {
        const formatter = format`${d}`;
        expect(formatter(new Date('11/10/2021 10:10:10'))).toEqual('10');
        expect(formatter(new Date('11/09/2021 10:10:10'))).toEqual('9');
        expect(formatter(new Date('11/01/2021 10:10:10'))).toEqual('1');
    });
});
