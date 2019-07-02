import { longestSubstring } from './longest-substring-with-at-least-k-repeating-characters-395';

describe('395. Longest Substring with At Least K Repeating Characters', () => {
    it('should return 0 if k is zero', () => {
        expect(longestSubstring('123', 0)).toEqual(0);
    });

    it('normal cases', () => {
        expect(longestSubstring('aaabb', 3)).toEqual(3);
        expect(longestSubstring('ababbc', 2)).toEqual(5);
    });
});
