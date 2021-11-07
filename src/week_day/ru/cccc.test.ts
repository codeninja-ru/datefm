// auto-generated, DO NOT EDIT, see scripts/weekDayTemplate.js
import { datefm } from 'datefm';
import cccc from 'datefm/week_day/ru/cccc';

describe('cccc (ru)', () => {
    test('format day of week', () => {
        const formatter = datefm`${cccc}`;
        expect(formatter(new Date('10/03/2021 10:10:10 UTC'))).toEqual('Воскресенье');
        expect(formatter(new Date('10/04/2021 10:10:10 UTC'))).toEqual('Понедельник');
        expect(formatter(new Date('10/05/2021 10:10:10 UTC'))).toEqual('Вторник');
        expect(formatter(new Date('10/06/2021 10:10:10 UTC'))).toEqual('Среда');
        expect(formatter(new Date('10/07/2021 10:10:10 UTC'))).toEqual('Четверг');
        expect(formatter(new Date('10/08/2021 10:10:10 UTC'))).toEqual('Пятница');
        expect(formatter(new Date('10/09/2021 10:10:10 UTC'))).toEqual('Суббота');
    });

});