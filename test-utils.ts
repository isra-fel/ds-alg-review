import { ListNode } from './lc/data-structures';

export class ListNodeHelper {
    static getLengthOf(node: ListNode<any>): number {
        let length = 0;
        while (node) {
            ++length;
            node = node.next;
        }
        return length;
    }

    static randomNumberList(length = 10): ListNode<number> {
        let head: ListNode<number>, tail: ListNode<number>;
        for (let i = 0; i !== length; ++i) {
            const node = new ListNode(MathHelper.random());
            if (!head) {
                head = node;
            }
            if (!tail) {
                tail = node;
            } else {
                tail.next = node;
                tail = node;
            }
        }
        return head;
    }

    static isSorted(list: ListNode<number>, asc = true): boolean {
        if (!list) {
            return false;
        }
        let node = list;
        while (true) {
            if (!node.next) {
                return true;
            }
            if (node.next.val < node.val) {
                console.error(`${this.convertToArray(list)} is not sorted`);
                return false;
            }
            node = node.next;
        }
    }

    static convertToArray<T>(list: ListNode<T>): T[] {
        const result = [];
        while (list) {
            result.push(list.val);
            list = list.next;
        }
        return result;
    }

    static fromArray<T>(items: T[]): ListNode<T> {
        const nodes = items.map(x => new ListNode(x));
        nodes.reduce((prev, curr) => {
            prev.next = curr;
            return curr;
        });
        return nodes[0];
    }
}

export class MathHelper {
    static random(limit = 10000): number {
        return Math.floor(Math.random() * limit);
    }
}
