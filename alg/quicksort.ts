import { SortAlgorism } from './sort.interface';

export const quickSort: SortAlgorism = items => {
    function sort(left: number, right: number) {
        if (left >= right) {
            return;
        }
        const pIndex = Math.floor((left + right) / 2);
        const p = items[pIndex];
        swap(pIndex, right);
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
                swap(i, j);
                ++i;
                --j;
            }
        }
        swap(i, right);
        if (left < j) {
            sort(left, j);
        }
        if (i + 1 < right) {
            sort(i + 1, right);
        }
    }

    function swap(i, j) {
        [items[i], items[j]] = [items[j], items[i]];
    }

    sort(0, items.length - 1);
};
