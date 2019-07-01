import {
    q1,
    pathInZigZagTree,
    zzMapper,
    calcZzLevel,
    getOriginalPath
} from './june30';

describe('weekly contest 143', () => {
    test('first question', () => {
        expect(q1(7, 4)).toEqual([1, 2, 3, 1]);
        expect(q1(10, 3)).toEqual([5, 2, 3]);
        expect(q1(1, 3)).toEqual([1, 0, 0]);
        expect(q1(6, 3)).toEqual([1, 2, 3]);
        expect(q1(60, 4)).toEqual([15, 18, 15, 12]);
    });

    test('second', () => {
        expect(zzMapper(2, 1)).toEqual(3);
        expect(zzMapper(3, 1)).toEqual(2);
        expect(zzMapper(7, 2)).toEqual(7);
        expect(zzMapper(8, 3)).toEqual(15);
        expect(calcZzLevel(2)).toEqual(1);
        expect(calcZzLevel(3)).toEqual(1);
        expect(calcZzLevel(6)).toEqual(2);
        expect(calcZzLevel(8)).toEqual(3);
        expect(calcZzLevel(15)).toEqual(3);
        expect(getOriginalPath(15)).toEqual([1, 3, 7, 15]);
        expect(pathInZigZagTree(14)).toEqual([1, 3, 4, 14]);
        expect(pathInZigZagTree(26)).toEqual([1, 2, 6, 10, 26]);
    });
});
