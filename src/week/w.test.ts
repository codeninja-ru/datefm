import { datefm, w } from 'datefm';

describe('w', () => {
    test('day of year', () => {
        const formatter = datefm`${w}`;
        expect(formatter(new Date('5 November 2016'))).toEqual('44');
        expect(formatter(new Date('5 January 2016'))).toEqual('1');
    });

});
