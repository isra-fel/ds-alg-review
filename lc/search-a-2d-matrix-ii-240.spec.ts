import { searchMatrix } from './search-a-2d-matrix-ii-240';

describe('240. Search a 2D Matrix II', () => {
    const matrix = [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30]
    ];
    it('should return true if the number is there', () => {
        expect(searchMatrix(matrix, 5)).toBeTruthy();
        expect(searchMatrix(matrix, 1)).toBeTruthy();
        expect(searchMatrix(matrix, 30)).toBeTruthy();
        expect(searchMatrix(matrix, 18)).toBeTruthy();
    });

    it('should return false if not', () => {
        expect(searchMatrix(matrix, 20)).toBeFalsy();
        expect(searchMatrix([], 20)).toBeFalsy();
    });
});
