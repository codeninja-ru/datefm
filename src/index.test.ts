import { format, dd, mm, yyyy, HH, MM, ss, SSS } from 'udate';

describe('complex tests', () => {
    test('dd/mm/yyyy', () => {
        expect(format`${dd}/${MM}/${yyyy}`(new Date('10/08/2020'))).toEqual('08/10/2020');
    });
    test('dd/mm/yyyy HH:MM:ss.SSS', () => {
        expect(format`${dd}/${MM}/${yyyy} ${HH}:${mm}:${ss}.${SSS}`(new Date('10/08/2020 20:25:30.123'))).toEqual('08/10/2020 20:25:30.123');
    });
});
