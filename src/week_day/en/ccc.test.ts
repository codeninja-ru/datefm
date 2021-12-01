// auto-generated, DO NOT EDIT, see scripts/weekDayTemplate.js
import { format } from 'udate';
import ccc from 'udate/week_day/en/ccc';

describe('ccc (en)', () => {
    test('format day of week', () => {
        const formatter = format`${ccc}`;
        expect(formatter(new Date('10/03/2021 10:10:10'))).toEqual('Sun');
        expect(formatter(new Date('10/04/2021 10:10:10'))).toEqual('Mon');
        expect(formatter(new Date('10/05/2021 10:10:10'))).toEqual('Tue');
        expect(formatter(new Date('10/06/2021 10:10:10'))).toEqual('Wed');
        expect(formatter(new Date('10/07/2021 10:10:10'))).toEqual('Thu');
        expect(formatter(new Date('10/08/2021 10:10:10'))).toEqual('Fri');
        expect(formatter(new Date('10/09/2021 10:10:10'))).toEqual('Sat');
    });

});
