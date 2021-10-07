import { datefm, mm } from 'datefm';

describe('mm', () => {
    test('format month (leading zero)', () => {
        const formatter = datefm`${mm}`;
        expect(formatter(new Date('01/10/2021 10:10:10 UTC'))).toEqual('01');
        expect(formatter(new Date('11/10/2021 10:10:10 UTC'))).toEqual('11');
        expect(formatter(new Date('12/10/2021 10:10:10 UTC'))).toEqual('12');
        expect(formatter(new Date('09/10/2021 10:10:10 UTC'))).toEqual('09');
        expect(formatter(new Date('10/10/2021 10:10:10 UTC'))).toEqual('10');
    });

});
