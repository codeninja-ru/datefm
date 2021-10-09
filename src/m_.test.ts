import { datefm, M } from 'datefm';

describe('M', () => {
    test('format month without leading zero', () => {
        const formatter = datefm`${M}`;
        expect(formatter(new Date('01/10/2021 10:10:10 UTC'))).toEqual('1');
        expect(formatter(new Date('11/10/2021 10:10:10 UTC'))).toEqual('11');
        expect(formatter(new Date('12/10/2021 10:10:10 UTC'))).toEqual('12');
        expect(formatter(new Date('09/10/2021 10:10:10 UTC'))).toEqual('9');
        expect(formatter(new Date('10/10/2021 10:10:10 UTC'))).toEqual('10');
    });

});