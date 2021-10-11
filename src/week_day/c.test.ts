import { datefm, c } from 'datefm';

describe('c', () => {
    test('format day of week without leading zero', () => {
        const formatter = datefm`${c}`;
        expect(formatter(new Date('10/09/2021 10:10:10 UTC'))).toEqual('5');
        expect(formatter(new Date('10/10/2021 10:10:10 UTC'))).toEqual('6');
        expect(formatter(new Date('10/04/2021 10:10:10 UTC'))).toEqual('0');
    });

});
