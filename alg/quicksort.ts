import { SortAlgorism } from './sort.interface';

export const quicksort: SortAlgorism = items => {
    internalQuicksort(items, 0, items.length - 1);
};

function internalQuicksort(
    items: number[],
    firstIndex: number,
    lastIndex: number
): void {
    function findPivotIndex(): number {
        const first = items[firstIndex];
        const midIndex = Math.floor((firstIndex + lastIndex) / 2);
        const middle = items[midIndex];
        const last = items[lastIndex];
        if (first < middle) {
            if (middle < last) {
                return midIndex;
            } else {
                if (first < last) {
                    return lastIndex;
                } else {
                    return firstIndex;
                }
            }
        } else {
            if (first < last) {
                return firstIndex;
            } else {
                if (middle < last) {
                    return midIndex;
                } else {
                    return lastIndex;
                }
            }
        }
    }

    function swap(index1: number, index2: number) {
        [items[index1], items[index2]] = [items[index2], items[index1]];
    }

    if (lastIndex === firstIndex) {
        return;
    }

    const pivotIndex = findPivotIndex();
    const pivot = items[pivotIndex];

    swap(pivotIndex, lastIndex);

    let i = firstIndex;
    let j = lastIndex - 1;

    while (i <= j) {
        while (items[i] < pivot) {
            ++i;
        }
        while (items[j] > pivot) {
            --j;
        }
        if (i <= j) {
            swap(i, j);
            ++i;
            --j;
        }
    }

    swap(i, lastIndex);

    if (firstIndex < j) {
        internalQuicksort(items, firstIndex, j);
    }
    if (i < lastIndex) {
        internalQuicksort(items, i + 1, lastIndex);
    }
}
