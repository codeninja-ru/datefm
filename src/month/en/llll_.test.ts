// auto-generated, DO NOT EDIT, see scripts/monthTemplate.js
import { format } from 'datefm';
import LLLL from 'datefm/month/en/llll_';

describe('LLLL (en)', () => {
    test('format month', () => {
        const formatter = format`${LLLL}`;
        expect(formatter(new Date('01/10/2021 10:10:10'))).toEqual('January');
        expect(formatter(new Date('02/10/2021 10:10:10'))).toEqual('February');
        expect(formatter(new Date('03/10/2021 10:10:10'))).toEqual('March');
        expect(formatter(new Date('04/10/2021 10:10:10'))).toEqual('April');
        expect(formatter(new Date('05/10/2021 10:10:10'))).toEqual('May');
        expect(formatter(new Date('06/10/2021 10:10:10'))).toEqual('June');
        expect(formatter(new Date('07/10/2021 10:10:10'))).toEqual('July');
        expect(formatter(new Date('08/10/2021 10:10:10'))).toEqual('August');
        expect(formatter(new Date('09/10/2021 10:10:10'))).toEqual('September');
        expect(formatter(new Date('10/10/2021 10:10:10'))).toEqual('October');
        expect(formatter(new Date('11/10/2021 10:10:10'))).toEqual('November');
        expect(formatter(new Date('12/10/2021 10:10:10'))).toEqual('December');
    });

});
