// auto-generated, DO NOT EDIT, see tools/weekDayTemplate.js
import { datefm } from 'datefm';
import eeee from 'datefm/week_day/ru/eeee';

describe('eeee (ru)', () => {
    test('format day of week', () => {
        const formatter = datefm`${eeee}`;
        expect(formatter(new Date('10/03/2021 10:10:10 UTC'))).toEqual('воскресенье');
        expect(formatter(new Date('10/04/2021 10:10:10 UTC'))).toEqual('понедельник');
        expect(formatter(new Date('10/05/2021 10:10:10 UTC'))).toEqual('вторник');
        expect(formatter(new Date('10/06/2021 10:10:10 UTC'))).toEqual('среду');
        expect(formatter(new Date('10/07/2021 10:10:10 UTC'))).toEqual('четверг');
        expect(formatter(new Date('10/08/2021 10:10:10 UTC'))).toEqual('пятницу');
        expect(formatter(new Date('10/09/2021 10:10:10 UTC'))).toEqual('субботу');
    });

});