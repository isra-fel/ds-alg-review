import { TreeNodeHelper } from './test-utils';
import { lowestCommonAncestor } from './lowest-common-ancestor-236';

describe('236. Lowest Common Ancestor of a Binary Tree', () => {
    const tree = TreeNodeHelper.deserialize([
        3,
        5,
        1,
        6,
        2,
        0,
        8,
        null,
        null,
        7,
        4
    ]);
    it('should find the LCA of two nodes', () => {
        expect(lowestCommonAncestor(tree, tree.left, tree.right.right)).toBe(
            tree
        );
        expect(
            lowestCommonAncestor(tree, tree.left, tree.left.right.right)
        ).toBe(tree.left);
        expect(lowestCommonAncestor(tree, tree.left, tree.left)).toBe(
            tree.left
        );
    });
});
