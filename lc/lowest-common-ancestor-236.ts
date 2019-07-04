import { NumberTree } from './data-structures';

export function lowestCommonAncestor(
    root: NumberTree,
    p: NumberTree,
    q: NumberTree
): NumberTree {
    let pathToP;
    let pathToQ;

    const path = [root];
    dfs(root);

    let i = 0;
    while (
        i < pathToP.length - 1 &&
        i < pathToQ.length - 1 &&
        pathToP[i + 1] === pathToQ[i + 1]
    ) {
        ++i;
    }
    return pathToP[i];

    function dfs(node: NumberTree) {
        if (node === p) {
            pathToP = [...path];
        }
        if (node === q) {
            pathToQ = [...path];
        }
        if (!pathToP || !pathToQ) {
            if (node.left) {
                path.push(node.left);
                dfs(node.left);
                path.pop();
            }

            if (node.right) {
                path.push(node.right);
                dfs(node.right);
                path.pop();
            }
        }
    }
}
