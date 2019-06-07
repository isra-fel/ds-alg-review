import { SortAlgorism } from './sort.interface';

export const mergeSort: SortAlgorism = items => {
    if (items.length <= 1) {
        return;
    }

    const midIndex = Math.floor(items.length / 2);
    const left = items.slice(0, midIndex);
    const right = items.slice(midIndex, items.length);

    mergeSort(left);
    mergeSort(right);

    items.splice(0, items.length, ...merge(left, right));
};

function merge(items1: number[], items2: number[]): number[] {
    const m = [];

    while (items1.length && items2.length) {
        m.push(items1[0] < items2[0] ? items1.shift() : items2.shift());
    }

    if (items1.length) {
        return [...m, ...items1];
    } else {
        return [...m, ...items2];
    }
}
