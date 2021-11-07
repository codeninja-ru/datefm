// auto-generated, DO NOT EDIT, see scripts/monthTemplate.js
import { datefm } from 'datefm';
import MMM from 'datefm/month/en/mmm_';

describe('MMM (en)', () => {
    test('format month', () => {
        const formatter = datefm`${MMM}`;
        expect(formatter(new Date('01/10/2021 10:10:10 UTC'))).toEqual('Jan');
        expect(formatter(new Date('02/10/2021 10:10:10 UTC'))).toEqual('Feb');
        expect(formatter(new Date('03/10/2021 10:10:10 UTC'))).toEqual('Mar');
        expect(formatter(new Date('04/10/2021 10:10:10 UTC'))).toEqual('Apr');
        expect(formatter(new Date('05/10/2021 10:10:10 UTC'))).toEqual('May');
        expect(formatter(new Date('06/10/2021 10:10:10 UTC'))).toEqual('Jun');
        expect(formatter(new Date('07/10/2021 10:10:10 UTC'))).toEqual('Jul');
        expect(formatter(new Date('08/10/2021 10:10:10 UTC'))).toEqual('Aug');
        expect(formatter(new Date('09/10/2021 10:10:10 UTC'))).toEqual('Sep');
        expect(formatter(new Date('10/10/2021 10:10:10 UTC'))).toEqual('Oct');
        expect(formatter(new Date('11/10/2021 10:10:10 UTC'))).toEqual('Nov');
        expect(formatter(new Date('12/10/2021 10:10:10 UTC'))).toEqual('Dec');
    });

});
