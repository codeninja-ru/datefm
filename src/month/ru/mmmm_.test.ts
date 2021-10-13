import { datefm } from 'datefm';
import MMMM from 'datefm/month/ru/mmmm_';

describe('MMMM (ru)', () => {
    test('format month', () => {
        const formatter = datefm`${MMMM}`;
        expect(formatter(new Date('01/10/2021 10:10:10 UTC'))).toEqual('января');
        expect(formatter(new Date('11/10/2021 10:10:10 UTC'))).toEqual('ноября');
        expect(formatter(new Date('12/10/2021 10:10:10 UTC'))).toEqual('декабря');
        expect(formatter(new Date('09/10/2021 10:10:10 UTC'))).toEqual('сентября');
        expect(formatter(new Date('10/10/2021 10:10:10 UTC'))).toEqual('октября');
    });

});
