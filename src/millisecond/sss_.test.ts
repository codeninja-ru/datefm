import { datefm, SSS } from 'datefm';

describe('SSS', () => {
    test('format milliseconds', () => {
        const formatter = datefm`${SSS}`;
        expect(formatter(new Date('11/10/2021 10:10:10.010 UTC'))).toEqual('010');
        expect(formatter(new Date('11/10/2021 10:10:10.000 UTC'))).toEqual('000');
        expect(formatter(new Date('11/10/2021 10:10:10.100 UTC'))).toEqual('100');
        expect(formatter(new Date('11/10/2021 10:10:10.001 UTC'))).toEqual('001');
        expect(formatter(new Date('11/10/2021 10:10:10.777 UTC'))).toEqual('777');
        expect(formatter(new Date('11/10/2021 10:10:10.123 UTC'))).toEqual('123');
        expect(formatter(new Date('11/10/2021 10:10:10.012 UTC'))).toEqual('012');
    });
});
