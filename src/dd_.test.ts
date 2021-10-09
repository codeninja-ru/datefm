import { datefm, DD } from 'datefm';

describe('DD', () => {
    test('day of the month (leading zero)', () => {
        const formatter = datefm`${DD}`;
        expect(formatter(new Date('11/10/2021 10:10:10 UTC'))).toEqual('10');
        expect(formatter(new Date('11/09/2021 10:10:10 UTC'))).toEqual('09');
        expect(formatter(new Date('11/01/2021 10:10:10 UTC'))).toEqual('01');
    });

});
