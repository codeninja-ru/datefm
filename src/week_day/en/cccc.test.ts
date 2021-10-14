import { datefm } from 'datefm';
import cccc from 'datefm/week_day/en/cccc';

describe('cccc (en)', () => {
    test('format day of week', () => {
        const formatter = datefm`${cccc}`;
        expect(formatter(new Date('10/03/2021 10:10:10 UTC'))).toEqual('Sunday');
        expect(formatter(new Date('10/04/2021 10:10:10 UTC'))).toEqual('Monday');
        expect(formatter(new Date('10/05/2021 10:10:10 UTC'))).toEqual('Tuesday');
        expect(formatter(new Date('10/06/2021 10:10:10 UTC'))).toEqual('Wednesday');
        expect(formatter(new Date('10/07/2021 10:10:10 UTC'))).toEqual('Thursday');
        expect(formatter(new Date('10/08/2021 10:10:10 UTC'))).toEqual('Friday');
        expect(formatter(new Date('10/09/2021 10:10:10 UTC'))).toEqual('Saturday');
        expect(formatter(new Date('10/10/2021 10:10:10 UTC'))).toEqual('Sunday');
        expect(formatter(new Date('10/11/2021 10:10:10 UTC'))).toEqual('Monday');
    });

});
