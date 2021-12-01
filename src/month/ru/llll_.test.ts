// auto-generated, DO NOT EDIT, see scripts/monthTemplate.js
import { format } from 'udate';
import LLLL from 'udate/month/ru/llll_';

describe('LLLL (ru)', () => {
    test('format month', () => {
        const formatter = format`${LLLL}`;
        expect(formatter(new Date('01/10/2021 10:10:10'))).toEqual('январь');
        expect(formatter(new Date('02/10/2021 10:10:10'))).toEqual('февраль');
        expect(formatter(new Date('03/10/2021 10:10:10'))).toEqual('март');
        expect(formatter(new Date('04/10/2021 10:10:10'))).toEqual('апрель');
        expect(formatter(new Date('05/10/2021 10:10:10'))).toEqual('май');
        expect(formatter(new Date('06/10/2021 10:10:10'))).toEqual('июнь');
        expect(formatter(new Date('07/10/2021 10:10:10'))).toEqual('июль');
        expect(formatter(new Date('08/10/2021 10:10:10'))).toEqual('август');
        expect(formatter(new Date('09/10/2021 10:10:10'))).toEqual('сентябрь');
        expect(formatter(new Date('10/10/2021 10:10:10'))).toEqual('октябрь');
        expect(formatter(new Date('11/10/2021 10:10:10'))).toEqual('ноябрь');
        expect(formatter(new Date('12/10/2021 10:10:10'))).toEqual('декабрь');
    });

});
