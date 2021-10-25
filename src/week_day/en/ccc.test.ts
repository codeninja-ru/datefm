// auto-generated, DO NOT EDIT, see tools/weekDayTemplate.js
import { datefm } from 'datefm';
import ccc from 'datefm/month/en/ccc';

describe('ccc (en)', () => {
    test('format month', () => {
        const formatter = datefm`${ccc}`;
        expect(formatter(new Date('01/10/2021 10:10:10 UTC'))).toEqual('Sun');
        expect(formatter(new Date('02/10/2021 10:10:10 UTC'))).toEqual('Mon');
        expect(formatter(new Date('03/10/2021 10:10:10 UTC'))).toEqual('Tue');
        expect(formatter(new Date('04/10/2021 10:10:10 UTC'))).toEqual('Wed');
        expect(formatter(new Date('05/10/2021 10:10:10 UTC'))).toEqual('Thu');
        expect(formatter(new Date('06/10/2021 10:10:10 UTC'))).toEqual('Fri');
        expect(formatter(new Date('07/10/2021 10:10:10 UTC'))).toEqual('Sat');
    });

});
