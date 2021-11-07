// auto-generated, DO NOT EDIT, see scripts/monthTemplate.js
import { datefm } from 'datefm';
import LLLL from 'datefm/month/ru/llll_';

describe('LLLL (ru)', () => {
    test('format month', () => {
        const formatter = datefm`${LLLL}`;
        expect(formatter(new Date('01/10/2021 10:10:10 UTC'))).toEqual('январь');
        expect(formatter(new Date('02/10/2021 10:10:10 UTC'))).toEqual('февраль');
        expect(formatter(new Date('03/10/2021 10:10:10 UTC'))).toEqual('март');
        expect(formatter(new Date('04/10/2021 10:10:10 UTC'))).toEqual('апрель');
        expect(formatter(new Date('05/10/2021 10:10:10 UTC'))).toEqual('май');
        expect(formatter(new Date('06/10/2021 10:10:10 UTC'))).toEqual('июнь');
        expect(formatter(new Date('07/10/2021 10:10:10 UTC'))).toEqual('июль');
        expect(formatter(new Date('08/10/2021 10:10:10 UTC'))).toEqual('август');
        expect(formatter(new Date('09/10/2021 10:10:10 UTC'))).toEqual('сентябрь');
        expect(formatter(new Date('10/10/2021 10:10:10 UTC'))).toEqual('октябрь');
        expect(formatter(new Date('11/10/2021 10:10:10 UTC'))).toEqual('ноябрь');
        expect(formatter(new Date('12/10/2021 10:10:10 UTC'))).toEqual('декабрь');
    });

});
