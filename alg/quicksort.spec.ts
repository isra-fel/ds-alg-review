import { quicksort } from './quicksort';

describe('quicksort', () => {
    it('should sort basic array', () => {
        const arr = [1, 5, 2, 7, 0];
        quicksort(arr);
        expect(arr).toEqual([0, 1, 2, 5, 7]);
    });
});
