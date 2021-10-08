import { datefm, yyyy } from 'datefm';

describe('yyyy', () => {
    test('format two digit year', () => {
        const formatter = datefm`${yyyy}`;
        expect(formatter(new Date('11/10/2021 10:10:10 UTC'))).toEqual('2021');
        expect(formatter(new Date('11/10/1988 10:10:10 UTC'))).toEqual('1988');
        expect(formatter(new Date('11/10/2001 10:10:10 UTC'))).toEqual('2001');
        expect(formatter(new Date(0))).toEqual('1970');
    });

});
