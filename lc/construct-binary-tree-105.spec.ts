import { buildTree } from './construct-binary-tree-105';
import { TreeNodeHelper } from './test-utils';

describe('105. Construct Binary Tree from Preorder and Inorder Traversal', () => {
    it('should return null when node is empty', () => {
        expect(buildTree([], [])).toBeNull();
    });

    it('should return the correct tree', () => {
        expect(
            TreeNodeHelper.serialize(
                buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
            )
        ).toEqual([3, 9, 20, null, null, 15, 7]);
    });

    it('should handle list case', () => {
        expect(
            TreeNodeHelper.serialize(
                buildTree([1, 2, 3, 4, 5], [2, 4, 5, 3, 1])
            )
        ).toEqual([1, 2, null, null, 3, 4, null, null, 5]);
    });
});
