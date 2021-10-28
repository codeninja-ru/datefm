import { datefm } from 'datefm';
import cc from 'datefm/week_day/first_day_monday/cc'

describe('cc (first day is Monday)', () => {
    test('format day of week without leading zero', () => {
        const formatter = datefm`${cc}`;
        expect(formatter(new Date('10/04/2021 10:10:10 UTC'))).toEqual('01');
        expect(formatter(new Date('10/05/2021 10:10:10 UTC'))).toEqual('02');
        expect(formatter(new Date('10/06/2021 10:10:10 UTC'))).toEqual('03');
        expect(formatter(new Date('10/07/2021 10:10:10 UTC'))).toEqual('04');
        expect(formatter(new Date('10/08/2021 10:10:10 UTC'))).toEqual('05');
        expect(formatter(new Date('10/09/2021 10:10:10 UTC'))).toEqual('06');
        expect(formatter(new Date('10/10/2021 10:10:10 UTC'))).toEqual('07');
        expect(formatter(new Date('10/11/2021 10:10:10 UTC'))).toEqual('01');
    });

});
