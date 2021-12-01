import { format, mm } from 'udate';

describe('mm (minutes)', () => {
    test('format minutes, leading zero', () => {
        const formatter = format`${mm}`;
        expect(formatter(new Date('11/10/2021 10:11:12'))).toEqual('11');
        expect(formatter(new Date('11/10/2021 10:00:12'))).toEqual('00');
        expect(formatter(new Date('11/10/2021 10:01:12'))).toEqual('01');
        expect(formatter(new Date('11/10/2021 10:09:12'))).toEqual('09');
        expect(formatter(new Date('11/10/2021 10:25:12'))).toEqual('25');
        expect(formatter(new Date('11/10/2021 10:59:12'))).toEqual('59');
    });

});
