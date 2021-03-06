import { format, yyyy } from 'udate';

describe('yyyy', () => {
    test('format two digit year', () => {
        const formatter = format`${yyyy}`;
        expect(formatter(new Date('11/10/2021 10:10:10'))).toEqual('2021');
        expect(formatter(new Date('11/10/1988 10:10:10'))).toEqual('1988');
        expect(formatter(new Date('11/10/2001 10:10:10'))).toEqual('2001');
        expect(formatter(new Date(0))).toEqual('1970');
    });

});
