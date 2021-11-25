import { datefm, D } from 'datefm';

describe('D', () => {
    test('day of year without leadin zero', () => {
        const formatter = datefm`${D}`;
        expect(formatter(new Date('1 January 2016 10:10:10 UTC'))).toEqual('1');
        expect(formatter(new Date('2 January 2016 10:10:10 UTC'))).toEqual('2');
        expect(formatter(new Date('10 January 2016 10:10:10 UTC'))).toEqual('10');
        expect(formatter(new Date('1 Feburary 2016 10:10:10 UTC'))).toEqual('32');
        expect(formatter(new Date('31 Decmeber 2016 10:10:10 UTC'))).toEqual('366');
        expect(formatter(new Date('31 Decmeber 2017 10:10:10 UTC'))).toEqual('365');
    });
});
