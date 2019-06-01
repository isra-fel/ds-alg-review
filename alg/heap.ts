export class Heap {
    private items: number[];

    constructor(items: number[] = []) {
        this.items = [...items];
        for (let i = Math.floor(items.length / 2) - 1; i >= 0; --i) {
            this.percolateDown(i);
        }
    }

    public insert(item: number): void {
        this.items.push(item);
        let index = this.items.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);
        for (
            ;
            index > 0 && item < this.items[parentIndex];
            index = parentIndex, parentIndex = Math.floor((index - 1) / 2)
        ) {
            this.items[index] = this.items[parentIndex];
        }
        this.items[index] = item;
    }

    public findMin(): number {
        return this.items[0];
    }

    public deleteMin(): number {
        const min = this.findMin();
        const last = this.items.pop();
        if (this.items.length) {
            this.items[0] = last;
            this.percolateDown(0);
        }
        return min;
    }

    private percolateDown(hole: number): void {
        let target = this.items[hole];
        let smallerChild: number;
        for (; 2 * hole + 1 < this.items.length; hole = smallerChild) {
            smallerChild = 2 * hole + 1;
            if (
                smallerChild + 1 < this.items.length &&
                this.items[smallerChild + 1] < this.items[smallerChild]
            ) {
                ++smallerChild;
            }
            if (this.items[smallerChild] < target) {
                this.items[hole] = this.items[smallerChild];
            } else {
                break;
            }
        }
        this.items[hole] = target;
    }

    public hasNext(): boolean {
        return this.items.length > 0;
    }
}
