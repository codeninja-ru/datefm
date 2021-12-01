// auto-generated, DO NOT EDIT, see scripts/monthTemplate.js
import { format } from 'udate';
import MMM from 'udate/month/ru/mmm_';

describe('MMM (ru)', () => {
    test('format month', () => {
        const formatter = format`${MMM}`;
        expect(formatter(new Date('01/10/2021 10:10:10'))).toEqual('янв.');
        expect(formatter(new Date('02/10/2021 10:10:10'))).toEqual('февр.');
        expect(formatter(new Date('03/10/2021 10:10:10'))).toEqual('мар.');
        expect(formatter(new Date('04/10/2021 10:10:10'))).toEqual('апр.');
        expect(formatter(new Date('05/10/2021 10:10:10'))).toEqual('мая');
        expect(formatter(new Date('06/10/2021 10:10:10'))).toEqual('июня');
        expect(formatter(new Date('07/10/2021 10:10:10'))).toEqual('июля');
        expect(formatter(new Date('08/10/2021 10:10:10'))).toEqual('авг.');
        expect(formatter(new Date('09/10/2021 10:10:10'))).toEqual('сент.');
        expect(formatter(new Date('10/10/2021 10:10:10'))).toEqual('окт.');
        expect(formatter(new Date('11/10/2021 10:10:10'))).toEqual('нояб.');
        expect(formatter(new Date('12/10/2021 10:10:10'))).toEqual('дек.');
    });

});
