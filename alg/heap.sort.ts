import { SortAlgorism } from './sort.interface';
// import { Heap } from './heap';

// export const heapSort: SortAlgorism = items => {
//     const heap = new Heap(items);
//     items.splice(0);
//     while (heap.hasNext()) {
//         items.push(heap.deleteMin());
//     }
// };

export const heapSort: SortAlgorism = items => {
    function buildHeap() {
        for (let i = Math.floor(items.length / 2) - 1; i >= 0; --i) {
            down(i, items.length);
        }
    }

    function down(i: number, size: number) {
        const target = items[i];
        while (2 * i + 1 < size) {
            let larger = 2 * i + 1;
            if (larger + 1 < size && items[larger + 1] > items[larger]) {
                ++larger;
            }
            if (items[larger] > target) {
                items[i] = items[larger];
                i = larger;
            } else {
                break;
            }
        }
        items[i] = target;
    }

    function swap(i, j) {
        [items[i], items[j]] = [items[j], items[i]];
    }

    function sort() {
        let size = items.length;
        while (size) {
            swap(0, --size);
            down(0, size);
        }
    }

    buildHeap();
    sort();
};
