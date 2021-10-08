import { datefm, dd, mm, yyyy, HH, MM, ss } from 'datefm';

describe('complex tests', () => {
    test('dd/mm/yyyy', () => {
        expect(datefm`${dd}/${mm}/${yyyy}`(new Date('10/08/2020'))).toEqual('08/10/2020');
    });
    test('dd/mm/yyyy HH:MM:ss', () => {
        expect(datefm`${dd}/${mm}/${yyyy} ${HH}:${MM}:${ss}`(new Date('10/08/2020 20:25:30'))).toEqual('08/10/2020 20:25:30');
    });
});
