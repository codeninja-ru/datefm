import { datefm, ww } from 'datefm';

describe('ww', () => {
    test('day of year', () => {
        const formatter = datefm`${ww}`;
        expect(formatter(new Date('5 November 2016'))).toEqual('44');
        expect(formatter(new Date('5 January 2016'))).toEqual('01');
        expect(formatter(new Date('6 January 2016'))).toEqual('01');
        expect(formatter(new Date('10 January 2016'))).toEqual('02');
    });

});
