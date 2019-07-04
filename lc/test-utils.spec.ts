import { TreeNodeHelper } from './test-utils';

describe('TreeNodeHelper', () => {
    it('should serialize a tree to an array', () => {
        const nodes = [0, 1, 2, 3, 5, 8].map(x => TreeNodeHelper.leaf(x));
        nodes[0].left = nodes[1];
        nodes[0].right = nodes[2];
        nodes[1].left = nodes[3];
        nodes[2].left = nodes[4];
        nodes[3].right = nodes[5];
        expect(TreeNodeHelper.serialize(nodes[0])).toEqual([
            0,
            1,
            2,
            3,
            null,
            5,
            null,
            null,
            8
        ]);
    });

    it('should serialize an empty tree', () => {
        expect(TreeNodeHelper.serialize(null)).toEqual([]);
    });

    it('should serialize tree with only 1 node', () => {
        expect(TreeNodeHelper.serialize(TreeNodeHelper.leaf(100))).toEqual([
            100
        ]);
    });

    it('should deserialize an empty tree', () => {
        expect(TreeNodeHelper.deserialize([])).toEqual(null);
    });

    it('should deserialize a one-node tree', () => {
        expect(TreeNodeHelper.deserialize([1])).toMatchObject({
            val: 1,
            left: null,
            right: null
        });
    });

    it('should deserialize a complex tree', () => {
        expect(
            TreeNodeHelper.deserialize([0, 1, 2, 3, null, 5, null, null, 8])
        ).toMatchObject({
            val: 0,
            left: {
                val: 1,
                left: {
                    val: 3,
                    left: null,
                    right: {
                        val: 8,
                        left: null,
                        right: null
                    }
                },
                right: null
            },
            right: {
                val: 2,
                left: { val: 5, left: null, right: null },
                right: null
            }
        });
    });

    it('should deserialize then serialize', () => {
        const array = [0, 1, 2, 3, null, 5, null, null, 8];
        expect(
            TreeNodeHelper.serialize(TreeNodeHelper.deserialize(array))
        ).toEqual(array);
    });
});
