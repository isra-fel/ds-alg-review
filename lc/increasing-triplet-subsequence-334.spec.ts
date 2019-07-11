import { increasingTriplet } from './increasing-triplet-subsequence-334';

describe('334. Increasing Triplet Subsequence', () => {
    it('should return true if there is such a sequence', () => {
        expect(increasingTriplet([1, 2, 3, 4, 5])).toBeTruthy();
        expect(increasingTriplet([3, 2, 7, 6, 7])).toBeTruthy();
    });

    it('should return false if there is not', () => {
        expect(increasingTriplet([5, 4, 3, 2, 1])).toBeFalsy();
        expect(increasingTriplet([1, 1, 2, 2])).toBeFalsy();
    });

    it('should return false if array has less than 3 numbers', () => {
        expect(increasingTriplet([])).toBeFalsy();
        expect(increasingTriplet([1, 2])).toBeFalsy();
    });
});
