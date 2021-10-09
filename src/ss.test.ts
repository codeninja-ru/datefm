import { datefm, ss } from 'datefm';

describe('ss', () => {
    test('format seconds, no leading zero', () => {
        const formatter = datefm`${ss}`;
        expect(formatter(new Date('11/10/2021 10:11:00'))).toEqual('00');
        expect(formatter(new Date('11/10/2021 10:11:01'))).toEqual('01');
        expect(formatter(new Date('11/10/2021 10:11:05'))).toEqual('05');
        expect(formatter(new Date('11/10/2021 10:11:09'))).toEqual('09');
        expect(formatter(new Date('11/10/2021 10:11:11'))).toEqual('11');
        expect(formatter(new Date('11/10/2021 10:11:25'))).toEqual('25');
        expect(formatter(new Date('11/10/2021 10:11:59'))).toEqual('59');
    });

});
