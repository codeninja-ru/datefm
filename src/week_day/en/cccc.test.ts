// auto-generated, DO NOT EDIT, see scripts/weekDayTemplate.js
import { datefm } from 'datefm';
import cccc from 'datefm/week_day/en/cccc';

describe('cccc (en)', () => {
    test('format day of week', () => {
        const formatter = datefm`${cccc}`;
        expect(formatter(new Date('10/03/2021 10:10:10'))).toEqual('Sunday');
        expect(formatter(new Date('10/04/2021 10:10:10'))).toEqual('Monday');
        expect(formatter(new Date('10/05/2021 10:10:10'))).toEqual('Tuesday');
        expect(formatter(new Date('10/06/2021 10:10:10'))).toEqual('Wednesday');
        expect(formatter(new Date('10/07/2021 10:10:10'))).toEqual('Thursday');
        expect(formatter(new Date('10/08/2021 10:10:10'))).toEqual('Friday');
        expect(formatter(new Date('10/09/2021 10:10:10'))).toEqual('Saturday');
    });

});