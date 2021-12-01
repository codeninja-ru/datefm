import { format, M } from 'udate';

describe('M', () => {
    test('format month without leading zero', () => {
        const formatter = format`${M}`;
        expect(formatter(new Date('01/10/2021 10:10:10'))).toEqual('1');
        expect(formatter(new Date('11/10/2021 10:10:10'))).toEqual('11');
        expect(formatter(new Date('12/10/2021 10:10:10'))).toEqual('12');
        expect(formatter(new Date('09/10/2021 10:10:10'))).toEqual('9');
        expect(formatter(new Date('10/10/2021 10:10:10'))).toEqual('10');
    });

});
