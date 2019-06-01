import { SortAlgorism } from './sort.interface';
import { Heap } from './heap';

// export const heapSort: SortAlgorism = items => {
//     const heap = new Heap(items);
//     items.splice(0);
//     while (heap.hasNext()) {
//         items.push(heap.deleteMin());
//     }
// };

export const heapSort: SortAlgorism = items => {
    function down(i: number, size: number) {
        const temp = items[i];
        while (2 * i + 1 < size) {
            let bigger = 2 * i + 1;
            if (bigger + 1 < size && items[bigger + 1] > items[bigger]) {
                bigger++;
            }
            if (items[bigger] > temp) {
                items[i] = items[bigger];
                i = bigger;
            } else {
                break;
            }
        }
        items[i] = temp;
    }

    for (let i = Math.floor(items.length / 2) - 1; i >= 0; --i) {
        down(i, items.length);
    }

    for (let i = items.length - 1; i > 0; --i) {
        [items[0], items[i]] = [items[i], items[0]];
        down(0, i);
    }
};
