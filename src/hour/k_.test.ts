import { datefm, K } from 'datefm';

describe('K', () => {
    test('format hours; no leading zero, 12-hour clock [0-11]', () => {
        const formatter = datefm`${K}`;
        expect(formatter(new Date('11/10/2021 10:11:12'))).toEqual('10');
        expect(formatter(new Date('11/10/2021 11:11:12'))).toEqual('11');
        expect(formatter(new Date('11/10/2021 09:11:12'))).toEqual('9');
        expect(formatter(new Date('11/10/2021 01:11:12'))).toEqual('1');
        expect(formatter(new Date('11/10/2021 19:11:12'))).toEqual('7');
        expect(formatter(new Date('11/10/2021 12:11:12'))).toEqual('0');
        expect(formatter(new Date('11/10/2021 16:11:12'))).toEqual('4');
        expect(formatter(new Date('11/10/2021 00:11:12'))).toEqual('0');
    });

});
