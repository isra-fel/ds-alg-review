import { SortAlgorism } from './sort.interface';

export const quickSort: SortAlgorism = items => {
    function sort(left: number, right: number) {
        if (left === right) {
            return;
        }
        const pIndex = Math.floor((left + right) / 2);
        const p = items[pIndex];

        [items[pIndex], items[right]] = [items[right], p];

        let i = left;
        let j = right - 1;

        while (i <= j) {
            while (items[i] < p) {
                ++i;
            }
            while (items[j] > p) {
                --j;
            }
            if (i <= j) {
                [items[i], items[j]] = [items[j], items[i]];
                ++i;
                --j;
            }
        }

        [items[i], items[right]] = [p, items[i]];
        if (left < j) {
            sort(left, j);
        }
        if (i + 1 < right) {
            sort(i + 1, right);
        }
    }

    sort(0, items.length - 1);
};
