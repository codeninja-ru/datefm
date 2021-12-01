// auto-generated, DO NOT EDIT, see scripts/monthTemplate.js
import { format } from 'datefm';
import MMM from 'datefm/month/en/mmm_';

describe('MMM (en)', () => {
    test('format month', () => {
        const formatter = format`${MMM}`;
        expect(formatter(new Date('01/10/2021 10:10:10'))).toEqual('Jan');
        expect(formatter(new Date('02/10/2021 10:10:10'))).toEqual('Feb');
        expect(formatter(new Date('03/10/2021 10:10:10'))).toEqual('Mar');
        expect(formatter(new Date('04/10/2021 10:10:10'))).toEqual('Apr');
        expect(formatter(new Date('05/10/2021 10:10:10'))).toEqual('May');
        expect(formatter(new Date('06/10/2021 10:10:10'))).toEqual('Jun');
        expect(formatter(new Date('07/10/2021 10:10:10'))).toEqual('Jul');
        expect(formatter(new Date('08/10/2021 10:10:10'))).toEqual('Aug');
        expect(formatter(new Date('09/10/2021 10:10:10'))).toEqual('Sep');
        expect(formatter(new Date('10/10/2021 10:10:10'))).toEqual('Oct');
        expect(formatter(new Date('11/10/2021 10:10:10'))).toEqual('Nov');
        expect(formatter(new Date('12/10/2021 10:10:10'))).toEqual('Dec');
    });

});
