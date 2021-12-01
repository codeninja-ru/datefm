import { format, k } from 'udate';

describe('k', () => {
    test('format hours; no leading zero, 24-hour clock', () => {
        const formatter = format`${k}`;
        expect(formatter(new Date('11/10/2021 10:11:12'))).toEqual('10');
        expect(formatter(new Date('11/10/2021 09:11:12'))).toEqual('9');
        expect(formatter(new Date('11/10/2021 01:11:12'))).toEqual('1');
        expect(formatter(new Date('11/10/2021 05:11:12'))).toEqual('5');
        expect(formatter(new Date('11/10/2021 08:11:12'))).toEqual('8');
        expect(formatter(new Date('11/10/2021 19:11:12'))).toEqual('19');
        expect(formatter(new Date('11/10/2021 12:11:12'))).toEqual('12');
        expect(formatter(new Date('11/10/2021 16:11:12'))).toEqual('16');
        expect(formatter(new Date('11/10/2021 23:11:12'))).toEqual('23');
        expect(formatter(new Date('11/10/2021 00:11:12'))).toEqual('24');
    });

});
