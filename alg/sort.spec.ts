import { quicksort } from './quicksort';
import { SortAlgorism } from './sort.interface';
import { insertionSort } from './insertion.sort';
import { selectionSort } from './selection.sort';
import { mergeSort } from './merge.sort';

const testFactory = (algorism: SortAlgorism) => {
    return () => {
        function randNumber(): number {
            return Math.floor(Math.random() * 1000);
        }

        function randArray(length: number): number[] {
            return Array(length)
                .fill(0)
                .map(() => randNumber());
        }

        it('should sort basic array', () => {
            const arr = [1, 5, 2, 7, 0, 6, 8, 3, 9, 4];
            algorism(arr);
            expect(arr).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });

        it('should sort a long array', () => {
            const arr = randArray(1000);
            const expected = [...arr].sort((x, y) => x - y);
            algorism(arr);
            expect(arr).toEqual(expected);
        });

        it('should sort an array of many dup items', () => {
            const arr = [4, 2, 4, 2, 4, 2];
            algorism(arr);
            expect(arr).toEqual([2, 2, 2, 4, 4, 4]);
        });
    };
};

describe('quick sort', testFactory(quicksort));
describe('insertion sort', testFactory(insertionSort));
describe('selection sort', testFactory(selectionSort));
describe('merge sort', testFactory(mergeSort));
