import { datefm, MM } from 'datefm';

describe('MM', () => {
    test('format month (leading zero)', () => {
        const formatter = datefm`${MM}`;
        expect(formatter(new Date('01/10/2021 10:10:10'))).toEqual('01');
        expect(formatter(new Date('11/10/2021 10:10:10'))).toEqual('11');
        expect(formatter(new Date('12/10/2021 10:10:10'))).toEqual('12');
        expect(formatter(new Date('09/10/2021 10:10:10'))).toEqual('09');
        expect(formatter(new Date('10/10/2021 10:10:10'))).toEqual('10');
    });

});
