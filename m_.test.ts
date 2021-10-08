import { datefm, M } from 'datefm';

describe('M (minutes)', () => {
    test('format minutes', () => {
        const formatter = datefm`${M}`;
        expect(formatter(new Date('11/10/2021 10:11:12'))).toEqual('11');
        expect(formatter(new Date('11/10/2021 10:00:12'))).toEqual('0');
        expect(formatter(new Date('11/10/2021 10:01:12'))).toEqual('1');
        expect(formatter(new Date('11/10/2021 10:09:12'))).toEqual('9');
        expect(formatter(new Date('11/10/2021 10:25:12'))).toEqual('25');
        expect(formatter(new Date('11/10/2021 10:59:12'))).toEqual('59');
    });

});
