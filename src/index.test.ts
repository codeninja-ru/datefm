import { format, dd, mm, yyyy, HH, MM, ss, SSS } from 'udate';
import MMMM from 'udate/month/en/mmmm_';
import ru_MMMM from 'udate/month/ru/mmmm_';

describe('complex tests', () => {
    test('dd/mm/yyyy', () => {
        expect(format`${dd}/${MM}/${yyyy}`(new Date('10/08/2020'))).toEqual('08/10/2020');
    });
    test('dd/mm/yyyy HH:MM:ss.SSS', () => {
        expect(format`${dd}/${MM}/${yyyy} ${HH}:${mm}:${ss}.${SSS}`(new Date('10/08/2020 20:25:30.123'))).toEqual('08/10/2020 20:25:30.123');
    });
    test('that format can be reused', () => {
        const fmt = format`${dd}/${MM}/${yyyy} ${HH}:${mm}:${ss}.${SSS}`;
        expect(fmt(new Date('10/08/2020 20:25:30.123'))).toEqual('08/10/2020 20:25:30.123');
        expect(fmt(new Date('10/08/2021 20:25:30.123'))).toEqual('08/10/2021 20:25:30.123');
        expect(fmt(new Date('10/08/2022 20:25:30.123'))).toEqual('08/10/2022 20:25:30.123');
    });

    test('langs', () => {
        expect(format`${dd} ${MMMM} ${yyyy}`(new Date('10/08/2020'))).toEqual('08 October 2020');
        expect(format`${dd} ${ru_MMMM} ${yyyy}`(new Date('10/08/2020'))).toEqual('08 октября 2020');
    });

    test('custom formatter', () => {
        const MS_IN_MINUTE = 60 * 1000;
        function minutesAgo(date) {
            const diff = Math.floor((Date.now() - date) / MS_IN_MINUTE);
            if (diff == 1) {
                return '1 minute ago';
            } else if (diff > 1) {
                return diff + ' minutes ago';
            } else {
                return '0 minutes ago';
            }
        }

        expect(format`It was ${minutesAgo}`(new Date(Date.now() - 10 * MS_IN_MINUTE))).toEqual('It was 10 minutes ago')
    });

});
