import { format, KK } from 'udate';

describe('KK', () => {
    test('format hours; leading zero, 12-hour clock [00-11]', () => {
        const formatter = format`${KK}`;
        expect(formatter(new Date('11/10/2021 10:11:12'))).toEqual('10');
        expect(formatter(new Date('11/10/2021 11:11:12'))).toEqual('11');
        expect(formatter(new Date('11/10/2021 09:11:12'))).toEqual('09');
        expect(formatter(new Date('11/10/2021 01:11:12'))).toEqual('01');
        expect(formatter(new Date('11/10/2021 19:11:12'))).toEqual('07');
        expect(formatter(new Date('11/10/2021 12:11:12'))).toEqual('00');
        expect(formatter(new Date('11/10/2021 16:11:12'))).toEqual('04');
        expect(formatter(new Date('11/10/2021 00:11:12'))).toEqual('00');
    });

});
