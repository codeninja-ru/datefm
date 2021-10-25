// auto-generated, DO NOT EDIT, see tools/weekDayTemplate.js
import { datefm } from 'datefm';
import ccc from 'datefm/week_day/en/ccc';

describe('ccc (en)', () => {
    test('format day of week', () => {
        const formatter = datefm`${ccc}`;
        expect(formatter(new Date('10/01/2021 10:10:10 UTC'))).toEqual('Sun');
        expect(formatter(new Date('10/02/2021 10:10:10 UTC'))).toEqual('Mon');
        expect(formatter(new Date('10/03/2021 10:10:10 UTC'))).toEqual('Tue');
        expect(formatter(new Date('10/04/2021 10:10:10 UTC'))).toEqual('Wed');
        expect(formatter(new Date('10/05/2021 10:10:10 UTC'))).toEqual('Thu');
        expect(formatter(new Date('10/06/2021 10:10:10 UTC'))).toEqual('Fri');
        expect(formatter(new Date('10/07/2021 10:10:10 UTC'))).toEqual('Sat');
    });

});