// auto-generated, DO NOT EDIT, see scripts/weekDayTemplate.js
import { format } from 'datefm';
import ccc from 'datefm/week_day/ru/ccc';

describe('ccc (ru)', () => {
    test('format day of week', () => {
        const formatter = format`${ccc}`;
        expect(formatter(new Date('10/03/2021 10:10:10'))).toEqual('Вск');
        expect(formatter(new Date('10/04/2021 10:10:10'))).toEqual('Пон');
        expect(formatter(new Date('10/05/2021 10:10:10'))).toEqual('Вт');
        expect(formatter(new Date('10/06/2021 10:10:10'))).toEqual('Ср');
        expect(formatter(new Date('10/07/2021 10:10:10'))).toEqual('Чт');
        expect(formatter(new Date('10/08/2021 10:10:10'))).toEqual('Птн');
        expect(formatter(new Date('10/09/2021 10:10:10'))).toEqual('Сб');
    });

});
