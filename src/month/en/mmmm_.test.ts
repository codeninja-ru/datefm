import { datefm } from 'datefm';
import MMMM from 'datefm/month/en/mmmm_';

describe('MMMM (en)', () => {
    test('format month', () => {
        const formatter = datefm`${MMMM}`;
        expect(formatter(new Date('01/10/2021 10:10:10 UTC'))).toEqual('January');
        expect(formatter(new Date('11/10/2021 10:10:10 UTC'))).toEqual('November');
        expect(formatter(new Date('12/10/2021 10:10:10 UTC'))).toEqual('December');
        expect(formatter(new Date('09/10/2021 10:10:10 UTC'))).toEqual('September');
        expect(formatter(new Date('10/10/2021 10:10:10 UTC'))).toEqual('October');
    });

});
