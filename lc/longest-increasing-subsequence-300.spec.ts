import { lengthOfLIS } from './longest-increasing-subsequence-300';

describe('300. Longest Increasing Subsequence', () => {
    it('should return the longest length possible', () => {
        expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toEqual(4);
    });

    it('should return 0 if the array is empty', () => {
        expect(lengthOfLIS([])).toEqual(0);
    });
});
