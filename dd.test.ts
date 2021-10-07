import { datefm, dd } from 'datefm';

describe('dd', () => {
    test('day of the month (leading zero)', () => {
        const formatter = datefm`${dd}`;
        expect(formatter(new Date('11/10/2021 10:10:10 UTC'))).toEqual('10');
        expect(formatter(new Date('11/09/2021 10:10:10 UTC'))).toEqual('09');
        expect(formatter(new Date('11/01/2021 10:10:10 UTC'))).toEqual('01');
    });

});
