import { ListNode, TreeNode } from './data-structures';

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

export class TreeNodeHelper {
    static deserialize<T>(array: T[]): TreeNode<T> {
        if (!array.length) {
            return null;
        }
        const nodes = array.map(val => (val === null ? null : this.leaf(val)));
        const head = nodes.shift();
        const parents = [head];

        while (nodes.length) {
            const parent = parents.shift();
            const lChild = nodes.shift();
            const rChild = nodes.shift();
            if (lChild) {
                parent.left = lChild;
                parents.push(lChild);
            }
            if (rChild) {
                parent.right = rChild;
                parents.push(rChild);
            }
        }

        return head;
    }

    static serialize<T>(tree: TreeNode<T>): T[] {
        if (!tree) {
            return [];
        }
        const result: T[] = [];
        const bfs = [tree];
        while (bfs.length) {
            const node = bfs.shift();
            result.push(node ? node.val : null);
            if (node) {
                bfs.push(node.left);
                bfs.push(node.right);
            }
        }
        // remove tailing null
        while (result.length && result[result.length - 1] === null) {
            result.pop();
        }
        return result;
    }

    static leaf<T>(val: T): TreeNode<T> {
        return { val, left: null, right: null };
    }
}

export class MathHelper {
    static random(limit = 10000): number {
        return Math.floor(Math.random() * limit);
    }
}
