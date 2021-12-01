// auto-generated, DO NOT EDIT, see scripts/weekDayTemplate.js
import { format } from 'udate';
import eeee from 'udate/week_day/ru/eeee';

describe('eeee (ru)', () => {
    test('format day of week', () => {
        const formatter = format`${eeee}`;
        expect(formatter(new Date('10/03/2021 10:10:10'))).toEqual('воскресенье');
        expect(formatter(new Date('10/04/2021 10:10:10'))).toEqual('понедельник');
        expect(formatter(new Date('10/05/2021 10:10:10'))).toEqual('вторник');
        expect(formatter(new Date('10/06/2021 10:10:10'))).toEqual('среду');
        expect(formatter(new Date('10/07/2021 10:10:10'))).toEqual('четверг');
        expect(formatter(new Date('10/08/2021 10:10:10'))).toEqual('пятницу');
        expect(formatter(new Date('10/09/2021 10:10:10'))).toEqual('субботу');
    });

});
