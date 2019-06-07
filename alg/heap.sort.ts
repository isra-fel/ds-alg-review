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

    function buildHeap() {
        for (let i = Math.floor(heapSize / 2) - 1; i >= 0; --i) {
            down(i);
        }
    }

    function down(i: number) {
        let child = 2 * i + 1;
        if (child >= heapSize) {
            return;
        }
        if (child + 1 < heapSize && items[child + 1] > items[child]) {
            child++;
        }
        if (items[i] < items[child]) {
            [items[i], items[child]] = [items[child], items[i]];
            down(child);
        }
    }

    function deleteMax(): number {
        const max = items[0];
        items[0] = items[heapSize - 1];
        --heapSize;
        down(0);
        return max;
    }

    buildHeap();
    while (heapSize > 0) {
        const max = deleteMax();
        items[heapSize] = max;
    }
};
