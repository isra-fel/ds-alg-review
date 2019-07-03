import {
    sampleStats,
    carPooling,
    MountainArray,
    findInMountainArray
} from './june23';

/*
describe('Weekly contest 142, problem 1', () => {
    it('should return min & max', () => {
        const [min, max, mean, median, mode] = sampleStats([
            0,
            1,
            3,
            4,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]);
        expect(min).toEqual(1);
        expect(max).toEqual(3);
        expect(mean).toBeCloseTo(2.375, 5);
        expect(median).toBeCloseTo(2.5, 5);
        expect(mode).toEqual(3);
    });

    it('another case', () => {
        const [min, max, mean, median, mode] = sampleStats([
            0,
            4,
            3,
            2,
            2,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]);
        expect(min).toEqual(1);
        expect(max).toEqual(4);
        expect(mean).toBeCloseTo(2.18182, 5);
        expect(median).toBeCloseTo(2, 5);
        expect(mode).toEqual(1);
    });

    it('should return median', () => {
        let [_, __, ___, median] = sampleStats([3, 0, 3]);
        expect(median).toEqual(1);
        [_, __, ___, median] = sampleStats([3, 0, 0, 3]);
        expect(median).toEqual(1.5);
        [_, __, ___, median] = sampleStats([3, 0, 4]);
        expect(median).toEqual(2);
        [_, __, ___, median] = sampleStats([3, 0, 0, 4]);
        expect(median).toEqual(3);
    });
});
*/

// describe('problem 2', () => {
//     it('should pass', () => {
//         expect(carPooling([[2, 0, 1]], 1)).toBe(false);
//         expect(carPooling([[2, 1, 5], [3, 3, 7]], 4)).toBe(false);
//         expect(carPooling([[2, 1, 5], [3, 3, 7]], 5)).toBe(true);
//         expect(carPooling([[2, 1, 5], [3, 5, 7]], 3)).toBe(true);
//         expect(carPooling([[3, 2, 7], [3, 7, 9], [8, 3, 9]], 11)).toBe(true);
//     });
// });

class MountainArrayImpl implements MountainArray {
    private heights: number[];
    constructor(heights: number[]) {
        this.heights = heights;
    }
    get(index: number) {
        return this.heights[index];
    }
    length() {
        return this.heights.length;
    }
}

describe('problem 3', () => {
    it('should find index', () => {
        expect(
            findInMountainArray(4, new MountainArrayImpl([1, 4, 5, 4, 3, 2, 1]))
        ).toEqual(1);
        expect(
            findInMountainArray(99, new MountainArrayImpl([1, 100, 99]))
        ).toEqual(2);
        expect(
            findInMountainArray(3, new MountainArrayImpl([1, 2, 3, 4, 5, 3, 1]))
        ).toEqual(2);
        expect(
            findInMountainArray(0, new MountainArrayImpl([0, 1, 2, 4, 2, 1]))
        ).toEqual(0);
        expect(
            findInMountainArray(0, new MountainArrayImpl([0, 1, 2, 4, 2, 1]))
        ).toEqual(0);
    });

    it('should return -1 when not found', () => {
        expect(
            findInMountainArray(3, new MountainArrayImpl([0, 1, 2, 4, 2, 1]))
        ).toEqual(-1);
        expect(
            findInMountainArray(0, new MountainArrayImpl([1, 2, 3, 4, 5, 3, 1]))
        ).toEqual(-1);
    });
});
