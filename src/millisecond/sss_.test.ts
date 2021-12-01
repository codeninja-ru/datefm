import { format, SSS } from 'udate';

describe('SSS', () => {
    test('format milliseconds', () => {
        const formatter = format`${SSS}`;
        expect(formatter(new Date('11/10/2021 10:10:10.010'))).toEqual('010');
        expect(formatter(new Date('11/10/2021 10:10:10.000'))).toEqual('000');
        expect(formatter(new Date('11/10/2021 10:10:10.100'))).toEqual('100');
        expect(formatter(new Date('11/10/2021 10:10:10.001'))).toEqual('001');
        expect(formatter(new Date('11/10/2021 10:10:10.777'))).toEqual('777');
        expect(formatter(new Date('11/10/2021 10:10:10.123'))).toEqual('123');
        expect(formatter(new Date('11/10/2021 10:10:10.012'))).toEqual('012');
    });
});
