import { datefm, h } from 'datefm';

describe('h', () => {
    test('format hours; no leading zero, 12-hour clock', () => {
        const formatter = datefm`${h}`;
        expect(formatter(new Date('11/10/2021 10:11:12'))).toEqual('10');
        expect(formatter(new Date('11/10/2021 09:11:12'))).toEqual('9');
        expect(formatter(new Date('11/10/2021 01:11:12'))).toEqual('1');
        expect(formatter(new Date('11/10/2021 19:11:12'))).toEqual('7');
        expect(formatter(new Date('11/10/2021 12:11:12'))).toEqual('12');
        expect(formatter(new Date('11/10/2021 16:11:12'))).toEqual('4');
        expect(formatter(new Date('11/10/2021 00:11:12'))).toEqual('0');
    });

});
