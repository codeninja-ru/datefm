import { datefm, DDD } from 'datefm';

describe('DDD', () => {
    test('day of year with 3 leadin zeros', () => {
        const formatter = datefm`${DDD}`;
        expect(formatter(new Date('1 January 2016 10:10:10 UTC'))).toEqual('001');
        expect(formatter(new Date('2 January 2016 10:10:10 UTC'))).toEqual('002');
        expect(formatter(new Date('10 January 2016 10:10:10 UTC'))).toEqual('010');
        expect(formatter(new Date('1 Feburary 2016 10:10:10 UTC'))).toEqual('032');
        expect(formatter(new Date('31 Decmeber 2016 10:10:10 UTC'))).toEqual('366');
        expect(formatter(new Date('31 Decmeber 2017 10:10:10 UTC'))).toEqual('365');
    });
});
