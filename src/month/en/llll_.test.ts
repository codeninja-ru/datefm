// auto-generated, DO NOT EDIT, see tools/monthTemplate.js
import { datefm } from 'datefm';
import LLLL from 'datefm/month/en/llll_';

describe('LLLL (en)', () => {
    test('format month', () => {
        const formatter = datefm`${LLLL}`;
        expect(formatter(new Date('01/10/2021 10:10:10 UTC'))).toEqual('January');
        expect(formatter(new Date('02/10/2021 10:10:10 UTC'))).toEqual('February');
        expect(formatter(new Date('03/10/2021 10:10:10 UTC'))).toEqual('March');
        expect(formatter(new Date('04/10/2021 10:10:10 UTC'))).toEqual('April');
        expect(formatter(new Date('05/10/2021 10:10:10 UTC'))).toEqual('May');
        expect(formatter(new Date('06/10/2021 10:10:10 UTC'))).toEqual('June');
        expect(formatter(new Date('07/10/2021 10:10:10 UTC'))).toEqual('July');
        expect(formatter(new Date('08/10/2021 10:10:10 UTC'))).toEqual('August');
        expect(formatter(new Date('09/10/2021 10:10:10 UTC'))).toEqual('September');
        expect(formatter(new Date('10/10/2021 10:10:10 UTC'))).toEqual('October');
        expect(formatter(new Date('11/10/2021 10:10:10 UTC'))).toEqual('November');
        expect(formatter(new Date('12/10/2021 10:10:10 UTC'))).toEqual('December');
    });

});
