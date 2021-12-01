import { format, w } from 'datefm';

describe('w', () => {
    test('day of year', () => {
        const formatter = format`${w}`;
        expect(formatter(new Date('5 November 2016'))).toEqual('44');
        expect(formatter(new Date('1 January 2016'))).toEqual('0');
        expect(formatter(new Date('5 January 2016'))).toEqual('1');
        expect(formatter(new Date('6 January 2016'))).toEqual('1');
        expect(formatter(new Date('7 January 2016'))).toEqual('1');
        expect(formatter(new Date('8 January 2016'))).toEqual('1');
        expect(formatter(new Date('9 January 2016'))).toEqual('1');
        expect(formatter(new Date('10 January 2016'))).toEqual('1');
        expect(formatter(new Date('11 January 2016'))).toEqual('2');
        expect(formatter(new Date('12 January 2016'))).toEqual('2');
    });

});
