import {
    findInMountainArray,
    MountainArray
} from './find-in-mountain-array-1095';

class MockMountainArray implements MountainArray {
    private heights: number[];
    private countGetCalls = 0;
    constructor(heights: number[]) {
        this.heights = heights;
    }
    get(index: number): number {
        if (++this.countGetCalls > 100) {
            throw new Error('Maximum call count exceeded!');
        }
        return this.heights[index];
    }
    length(): number {
        return this.heights.length;
    }
    static random(length: number): MountainArray {
        let peakIndex = Math.floor(Math.random() * length);
        const heights = [Math.random()];
        for (let i = 1; i <= peakIndex; ++i) {
            heights.push(heights[i - 1] + Math.random());
        }
        for (let i = peakIndex + 1; i !== length; ++i) {
            heights.push(heights[i - 1] - Math.random());
        }
        return new MockMountainArray(heights);
    }
}

describe('Find in mountain array', () => {
    it('should return -1 if not found', () => {
        expect(
            findInMountainArray(0, new MockMountainArray([1, 5, 2]))
        ).toEqual(-1);
    });

    it('should return the peak', () => {
        expect(
            findInMountainArray(3, new MockMountainArray([1, 2, 3, 2, 1]))
        ).toEqual(2);
    });

    it('should work for long array', () => {
        const mountain = MockMountainArray.random(10000);
        expect(findInMountainArray(mountain.get(9999), mountain)).toEqual(9999);
    });
});
