import { numIslands } from './number-of-islands-200';

describe('200. Number of Islands', () => {
    it('should return 0 if there is no land', () => {
        expect(numIslands([])).toEqual(0);
        expect(numIslands(['00000000000000'])).toEqual(0);
        expect(numIslands(['0', '0', '0', '0', '0', '0', '0', '0'])).toEqual(0);
    });

    it('should return the number of islands', () => {
        expect(numIslands(['1'])).toEqual(1);
        expect(numIslands(['1', '0', '1', '0', '1', '0', '1', '0'])).toEqual(4);
        expect(numIslands(['11110', '11010', '11000', '00000'])).toEqual(1);
        expect(numIslands(['11000', '11000', '00100', '00011'])).toEqual(3);
        expect(numIslands(['111', '010', '111'])).toEqual(1);
    });
});
