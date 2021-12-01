import { format } from 'udate';
import cc from 'udate/week_day/first_day_sunday/cc'

describe('cc (the first day is Sunday)', () => {
    test('format day of week without leading zero', () => {
        const formatter = format`${cc}`;
        expect(formatter(new Date('10/03/2021 10:10:10'))).toEqual('01');
        expect(formatter(new Date('10/04/2021 10:10:10'))).toEqual('02');
        expect(formatter(new Date('10/05/2021 10:10:10'))).toEqual('03');
        expect(formatter(new Date('10/06/2021 10:10:10'))).toEqual('04');
        expect(formatter(new Date('10/07/2021 10:10:10'))).toEqual('05');
        expect(formatter(new Date('10/08/2021 10:10:10'))).toEqual('06');
        expect(formatter(new Date('10/09/2021 10:10:10'))).toEqual('07');
        expect(formatter(new Date('10/10/2021 10:10:10'))).toEqual('01');
        expect(formatter(new Date('10/11/2021 10:10:10'))).toEqual('02');
    });

});
