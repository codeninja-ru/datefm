import { datefm } from 'datefm';
import c from 'datefm/week_day/first_day_sunday/c'

describe('c', () => {
    test('format day of week without leading zero', () => {
        const formatter = datefm`${c}`;
        expect(formatter(new Date('10/03/2021 10:10:10 UTC'))).toEqual('1');
        expect(formatter(new Date('10/04/2021 10:10:10 UTC'))).toEqual('2');
        expect(formatter(new Date('10/05/2021 10:10:10 UTC'))).toEqual('3');
        expect(formatter(new Date('10/06/2021 10:10:10 UTC'))).toEqual('4');
        expect(formatter(new Date('10/07/2021 10:10:10 UTC'))).toEqual('5');
        expect(formatter(new Date('10/08/2021 10:10:10 UTC'))).toEqual('6');
        expect(formatter(new Date('10/09/2021 10:10:10 UTC'))).toEqual('7');
        expect(formatter(new Date('10/10/2021 10:10:10 UTC'))).toEqual('1');
        expect(formatter(new Date('10/11/2021 10:10:10 UTC'))).toEqual('2');
    });

});
