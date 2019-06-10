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
    let heapSize = items.length;

    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; --i) {
        down(i);
    }

    function down(i) {
        const top = items[i];
        while (2 * i + 1 < heapSize) {
            let iChild = 2 * i + 1;
            if (iChild + 1 < heapSize && items[iChild + 1] > items[iChild]) {
                ++iChild;
            }

            if (items[iChild] > top) {
                items[i] = items[iChild];
                i = iChild;
            } else {
                break;
            }
        }
        items[i] = top;
    }

    function swap(i, j) {
        [items[i], items[j]] = [items[j], items[i]];
    }

    while (heapSize > 1) {
        swap(0, --heapSize);
        down(0);
    }
};
