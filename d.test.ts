import { datefm, d } from 'datefm';

describe('d', () => {
    test('day of the mounth without leading zero', () => {
        const formatter = datefm`${d}`;
        expect(formatter(new Date('10/11/2021 10:10:10 UTC'))).toEqual('10');
        expect(formatter(new Date('9/11/2021 10:10:10 UTC'))).toEqual('9');
        expect(formatter(new Date('1/11/2021 10:10:10 UTC'))).toEqual('1');
    });

});
