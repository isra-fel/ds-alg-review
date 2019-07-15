import { findPeakElement } from './find-peak-element-162';

describe('162. Find Peak Element', () => {
    it('should return the index of the peak', () => {
        expect(findPeakElement([1, 2, 3, 1])).toEqual(2);
        const peakIndex = findPeakElement([1, 2, 1, 3, 5, 6, 4]);
        expect(peakIndex === 1 || peakIndex === 5).toBeTruthy();
    });

    it('should return 0 on descending elements', () => {
        expect(findPeakElement([5, 4, 3, 2, 1])).toEqual(0);
        expect(findPeakElement([1])).toEqual(0);
    });

    it('should return the last index on ascending elements', () => {
        expect(findPeakElement([1, 2, 3, 4, 5])).toEqual(4);
    });
});
