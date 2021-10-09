import { datefm, D } from 'datefm';

describe('D', () => {
    test('day of the mounth without leading zero', () => {
        const formatter = datefm`${D}`;
        expect(formatter(new Date('11/10/2021 10:10:10 UTC'))).toEqual('10');
        expect(formatter(new Date('11/09/2021 10:10:10 UTC'))).toEqual('9');
        expect(formatter(new Date('11/01/2021 10:10:10 UTC'))).toEqual('1');
    });

});
