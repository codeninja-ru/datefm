import { datefm, yy } from 'datefm';

describe('yy', () => {
    test('format two digit year', () => {
        const formatter = datefm`${yy}`;
        expect(formatter(new Date('11/10/2021 10:10:10'))).toEqual('21');
        expect(formatter(new Date('11/10/1988 10:10:10'))).toEqual('88');
        expect(formatter(new Date('11/10/2001 10:10:10'))).toEqual('01');
        expect(formatter(new Date('11/10/0001 10:10:10'))).toEqual('01');
    });

});
