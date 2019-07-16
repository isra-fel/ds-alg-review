import { NumberTree } from './data-structures';

export function buildTree(preorder: number[], inorder: number[]): NumberTree {
    const indexInOrder = new Map<number, number>();
    inorder.forEach((value, i) => indexInOrder.set(value, i));

    return buildRangeInOrder(0, 0, inorder.length - 1);

    function buildRangeInOrder(
        nextRootIndex: number,
        start: number,
        end: number
    ): NumberTree {
        if (start > end) {
            return null;
        }

        if (start === end) {
            return {
                val: preorder[nextRootIndex],
                left: null,
                right: null
            };
        }

        const rootInOrder = indexInOrder.get(preorder[nextRootIndex]);

        return {
            val: preorder[nextRootIndex],
            left: buildRangeInOrder(nextRootIndex + 1, start, rootInOrder - 1),
            right: buildRangeInOrder(
                nextRootIndex + rootInOrder - start + 1,
                rootInOrder + 1,
                end
            )
        };
    }
}
