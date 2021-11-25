// auto-generated, DO NOT EDIT, see scripts/monthTemplate.js
import { datefm } from 'datefm';
import MMMM from 'datefm/month/ru/mmmm_';

describe('MMMM (ru)', () => {
    test('format month', () => {
        const formatter = datefm`${MMMM}`;
        expect(formatter(new Date('01/10/2021 10:10:10'))).toEqual('января');
        expect(formatter(new Date('02/10/2021 10:10:10'))).toEqual('февраля');
        expect(formatter(new Date('03/10/2021 10:10:10'))).toEqual('марта');
        expect(formatter(new Date('04/10/2021 10:10:10'))).toEqual('апреля');
        expect(formatter(new Date('05/10/2021 10:10:10'))).toEqual('мая');
        expect(formatter(new Date('06/10/2021 10:10:10'))).toEqual('июня');
        expect(formatter(new Date('07/10/2021 10:10:10'))).toEqual('июля');
        expect(formatter(new Date('08/10/2021 10:10:10'))).toEqual('августа');
        expect(formatter(new Date('09/10/2021 10:10:10'))).toEqual('сентября');
        expect(formatter(new Date('10/10/2021 10:10:10'))).toEqual('октября');
        expect(formatter(new Date('11/10/2021 10:10:10'))).toEqual('ноября');
        expect(formatter(new Date('12/10/2021 10:10:10'))).toEqual('декабря');
    });

});
