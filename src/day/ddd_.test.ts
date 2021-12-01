import { format, DDD } from 'udate';

describe('DDD', () => {
    test('day of year with 3 leadin zeros', () => {
        const formatter = format`${DDD}`;
        expect(formatter(new Date('1 January 2016 10:10:10'))).toEqual('001');
        expect(formatter(new Date('2 January 2016 10:10:10'))).toEqual('002');
        expect(formatter(new Date('10 January 2016 10:10:10'))).toEqual('010');
        expect(formatter(new Date('1 Feburary 2016 10:10:10'))).toEqual('032');
        expect(formatter(new Date('31 Decmeber 2016 10:10:10'))).toEqual('366');
        expect(formatter(new Date('31 Decmeber 2017 10:10:10'))).toEqual('365');
    });
});
