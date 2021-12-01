// auto-generated, DO NOT EDIT, see scripts/weekDayTemplate.js
import { format } from 'udate';
import cccc from 'udate/week_day/ru/cccc';

describe('cccc (ru)', () => {
    test('format day of week', () => {
        const formatter = format`${cccc}`;
        expect(formatter(new Date('10/03/2021 10:10:10'))).toEqual('Воскресенье');
        expect(formatter(new Date('10/04/2021 10:10:10'))).toEqual('Понедельник');
        expect(formatter(new Date('10/05/2021 10:10:10'))).toEqual('Вторник');
        expect(formatter(new Date('10/06/2021 10:10:10'))).toEqual('Среда');
        expect(formatter(new Date('10/07/2021 10:10:10'))).toEqual('Четверг');
        expect(formatter(new Date('10/08/2021 10:10:10'))).toEqual('Пятница');
        expect(formatter(new Date('10/09/2021 10:10:10'))).toEqual('Суббота');
    });

});
