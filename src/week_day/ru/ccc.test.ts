import { datefm } from 'datefm';
import ccc from 'datefm/week_day/ru/ccc';

describe('ccc (ru)', () => {
    test('format day of week', () => {
        const formatter = datefm`${ccc}`;
        expect(formatter(new Date('10/03/2021 10:10:10 UTC'))).toEqual('Вск');
        expect(formatter(new Date('10/04/2021 10:10:10 UTC'))).toEqual('Пон');
        expect(formatter(new Date('10/05/2021 10:10:10 UTC'))).toEqual('Вт');
        expect(formatter(new Date('10/06/2021 10:10:10 UTC'))).toEqual('Ср');
        expect(formatter(new Date('10/07/2021 10:10:10 UTC'))).toEqual('Чт');
        expect(formatter(new Date('10/08/2021 10:10:10 UTC'))).toEqual('Птн');
        expect(formatter(new Date('10/09/2021 10:10:10 UTC'))).toEqual('Сб');
        expect(formatter(new Date('10/10/2021 10:10:10 UTC'))).toEqual('Вск');
        expect(formatter(new Date('10/11/2021 10:10:10 UTC'))).toEqual('Пон');
    });

});
