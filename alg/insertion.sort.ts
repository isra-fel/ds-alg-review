import { SortAlgorism } from './sort.interface';

export const insertionSort: SortAlgorism = items => {
    for (let i = 1; i !== items.length; ++i) {
        const value = items[i];
        let j = i - 1;
        while (j >= 0 && items[j] > value) {
            items[j + 1] = items[j];
            --j;
        }
        items[j + 1] = value;
    }
};
