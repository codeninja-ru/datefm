import { datefm, ww } from 'datefm';

describe('ww', () => {
    test('day of year', () => {
        const formatter = datefm`${ww}`;
        expect(formatter(new Date('5 November 2016'))).toEqual('44');
        expect(formatter(new Date('5 January 2016'))).toEqual('01');
    });

});
