import { format, hh } from 'udate';

describe('hh', () => {
    test('format hours; no leading zero, 12-hour clock [01-12]', () => {
        const formatter = format`${hh}`;
        expect(formatter(new Date('11/10/2021 10:11:12'))).toEqual('10');
        expect(formatter(new Date('11/10/2021 09:11:12'))).toEqual('09');
        expect(formatter(new Date('11/10/2021 01:11:12'))).toEqual('01');
        expect(formatter(new Date('11/10/2021 19:11:12'))).toEqual('07');
        expect(formatter(new Date('11/10/2021 12:11:12'))).toEqual('12');
        expect(formatter(new Date('11/10/2021 16:11:12'))).toEqual('04');
        expect(formatter(new Date('11/10/2021 00:11:12'))).toEqual('12');
    });

});
