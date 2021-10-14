import { datefm } from 'datefm';
import MMM from 'datefm/month/ru/mmm_';

describe('MMM (ru)', () => {
    test('format month', () => {
        const formatter = datefm`${MMM}`;
        expect(formatter(new Date('01/10/2021 10:10:10 UTC'))).toEqual('янв.');
        expect(formatter(new Date('11/10/2021 10:10:10 UTC'))).toEqual('нояб.');
        expect(formatter(new Date('12/10/2021 10:10:10 UTC'))).toEqual('дек.');
        expect(formatter(new Date('09/10/2021 10:10:10 UTC'))).toEqual('сент.');
        expect(formatter(new Date('10/10/2021 10:10:10 UTC'))).toEqual('окт.');
        expect(formatter(new Date('05/10/2021 10:10:10 UTC'))).toEqual('мая');
        expect(formatter(new Date('06/10/2021 10:10:10 UTC'))).toEqual('июня');
        expect(formatter(new Date('07/10/2021 10:10:10 UTC'))).toEqual('июля');
    });

});