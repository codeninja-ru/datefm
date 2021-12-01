import { format, s } from 'udate';

describe('s', () => {
    test('format seconds, no leading zero', () => {
        const formatter = format`${s}`;
        expect(formatter(new Date('11/10/2021 10:11:00'))).toEqual('0');
        expect(formatter(new Date('11/10/2021 10:11:01'))).toEqual('1');
        expect(formatter(new Date('11/10/2021 10:11:05'))).toEqual('5');
        expect(formatter(new Date('11/10/2021 10:11:09'))).toEqual('9');
        expect(formatter(new Date('11/10/2021 10:11:11'))).toEqual('11');
        expect(formatter(new Date('11/10/2021 10:11:25'))).toEqual('25');
        expect(formatter(new Date('11/10/2021 10:11:59'))).toEqual('59');
    });

});
