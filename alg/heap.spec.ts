import { Heap } from './heap';

describe('Heap', () => {
    let heap: Heap;

    beforeEach(() => {
        heap = new Heap();
    });

    it('should add new item', () => {
        heap.insert(3);
        heap.insert(1);
        heap.insert(2);
        expect(heap['items']).toHaveLength(3);
        expect(
            heap['items'][0] <= heap['items'][1] &&
                heap['items'][0] <= heap['items'][2]
        ).toBeTruthy();
    });

    it('can deleteMin', () => {
        heap.insert(3);
        heap.insert(4);
        heap.insert(2);
        heap.insert(1);
        expect(heap.deleteMin()).toEqual(1);
        expect(heap.deleteMin()).toEqual(2);
        expect(heap.deleteMin()).toEqual(3);
        expect(heap.deleteMin()).toEqual(4);
    });
});
