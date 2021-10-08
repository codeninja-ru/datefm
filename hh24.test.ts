import { datefm, HH } from 'datefm';

describe('HH', () => {
    test('format hours; leading zero, 24-hour clock', () => {
        const formatter = datefm`${HH}`;
        expect(formatter(new Date('11/10/2021 10:11:12'))).toEqual('10');
        expect(formatter(new Date('11/10/2021 09:11:12'))).toEqual('09');
        expect(formatter(new Date('11/10/2021 01:11:12'))).toEqual('01');
        expect(formatter(new Date('11/10/2021 05:11:12'))).toEqual('05');
        expect(formatter(new Date('11/10/2021 08:11:12'))).toEqual('08');
        expect(formatter(new Date('11/10/2021 19:11:12'))).toEqual('19');
        expect(formatter(new Date('11/10/2021 12:11:12'))).toEqual('12');
        expect(formatter(new Date('11/10/2021 16:11:12'))).toEqual('16');
        expect(formatter(new Date('11/10/2021 00:11:12'))).toEqual('00');
    });

});
