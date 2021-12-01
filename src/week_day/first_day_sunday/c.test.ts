import { format } from 'datefm';
import c from 'datefm/week_day/first_day_sunday/c'

describe('c', () => {
    test('format day of week without leading zero', () => {
        const formatter = format`${c}`;
        expect(formatter(new Date('10/03/2021 10:10:10'))).toEqual('1');
        expect(formatter(new Date('10/04/2021 10:10:10'))).toEqual('2');
        expect(formatter(new Date('10/05/2021 10:10:10'))).toEqual('3');
        expect(formatter(new Date('10/06/2021 10:10:10'))).toEqual('4');
        expect(formatter(new Date('10/07/2021 10:10:10'))).toEqual('5');
        expect(formatter(new Date('10/08/2021 10:10:10'))).toEqual('6');
        expect(formatter(new Date('10/09/2021 10:10:10'))).toEqual('7');
        expect(formatter(new Date('10/10/2021 10:10:10'))).toEqual('1');
        expect(formatter(new Date('10/11/2021 10:10:10'))).toEqual('2');
    });

});
