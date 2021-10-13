import { datefm } from 'datefm';
import LLLL from 'datefm/month/ru/llll_';

describe('LLLL (ru)', () => {
    test('format month', () => {
        const formatter = datefm`${LLLL}`;
        expect(formatter(new Date('01/10/2021 10:10:10 UTC'))).toEqual('январь');
        expect(formatter(new Date('11/10/2021 10:10:10 UTC'))).toEqual('ноябрь');
        expect(formatter(new Date('12/10/2021 10:10:10 UTC'))).toEqual('декабрь');
        expect(formatter(new Date('09/10/2021 10:10:10 UTC'))).toEqual('сентябрь');
        expect(formatter(new Date('10/10/2021 10:10:10 UTC'))).toEqual('октябрь');
    });

});
