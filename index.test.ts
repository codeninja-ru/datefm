import { datefm, dd, mm, yyyy } from 'datefm';

describe('complex tests', () => {
    test('dd/mm/yyyy', () => {
        expect(datefm`${dd}/${mm}/${yyyy}`(new Date('10/08/2020'))).toEqual('08/10/2020');
    });
});
