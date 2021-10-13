import { datefm } from 'datefm';
import MMM from 'datefm/month/en/mmm_';

describe('MMM (en)', () => {
    test('format month', () => {
        const formatter = datefm`${MMM}`;
        expect(formatter(new Date('01/10/2021 10:10:10 UTC'))).toEqual('Jan');
        expect(formatter(new Date('11/10/2021 10:10:10 UTC'))).toEqual('Nov');
        expect(formatter(new Date('12/10/2021 10:10:10 UTC'))).toEqual('Dec');
        expect(formatter(new Date('09/10/2021 10:10:10 UTC'))).toEqual('Sep');
        expect(formatter(new Date('10/10/2021 10:10:10 UTC'))).toEqual('Oct');
    });

});
