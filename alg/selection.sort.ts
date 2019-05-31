import { SortAlgorism } from './sort.interface';

export const selectionSort: SortAlgorism = items => {
    for (let i = 0; i < items.length - 1; ++i) {
        let min = items[i];
        let minIndex = i;
        for (let j = i + 1; j <= items.length; ++j) {
            if (items[j] < min) {
                min = items[j];
                minIndex = j;
            }
        }
        [items[i], items[minIndex]] = [items[minIndex], items[i]];
    }
};
