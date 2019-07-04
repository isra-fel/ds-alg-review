export class ListNode<T> {
    val: T;
    next: ListNode<T>;

    constructor(val: T) {
        this.val = val;
        this.next = null;
    }
}

export interface TreeNode<T> {
    val: T;
    left: TreeNode<T>;
    right: TreeNode<T>;
}

export type NumberTree = TreeNode<number>;
