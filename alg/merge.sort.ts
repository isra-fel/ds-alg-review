import { SortAlgorism } from './sort.interface';

export const mergeSort: SortAlgorism = items => {
    if (items.length === 1) {
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
    const newArray = [];
    while (items1.length && items2.length) {
        if (items1[0] < items2[0]) {
            newArray.push(items1.shift());
        } else {
            newArray.push(items2.shift());
        }
    }
    while (items1.length) {
        newArray.push(items1.shift());
    }
    while (items2.length) {
        newArray.push(items2.shift());
    }
    return newArray;
}
