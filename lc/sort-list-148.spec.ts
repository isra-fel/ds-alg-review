import { sortList, stepIn, NumberList, merge } from './sort-list-148';
import { ListNode, ListNodeHelper } from '../test-utils';

describe('stepIn()', () => {
    it('should move the pointer by given steps', () => {
        const nodes = [1, 2, 3, 4, 5].map(x => new ListNode(x));
        nodes.reduce((prev, curr) => {
            prev.next = curr;
            return curr;
        });
        const head = nodes[0];
        expect(stepIn(head, 1)).toBe(nodes[1]);
        expect(stepIn(head, 4)).toBe(nodes[4]);
    });

    it('should return null if the pointer is moved out of the list', () => {
        expect(stepIn(new ListNode(3), 10)).toBeNull();
    });
});

describe('merge', () => {
    let nodes: NumberList[];
    beforeEach(() => {
        nodes = [1, 3, 5, 2, 4, 6].map(x => new ListNode(x));
        nodes.reduce((prev, curr) => {
            prev.next = curr;
            return curr;
        });
    });

    it('should merge two complete lists', () => {
        const { mergedHead } = merge(nodes[0], nodes[3], null);
        expect(ListNodeHelper.convertToArray(mergedHead)).toEqual([
            1,
            2,
            3,
            4,
            5,
            6
        ]);
    });

    it('should merge two partial lists', () => {
        const list = ListNodeHelper.fromArray([4, 1, 2, 3, 5, 6]);
        const { mergedHead } = merge(list, list.next, list.next.next);
        expect(mergedHead.val).toEqual(1);
        expect(mergedHead.next.val).toEqual(4);
    });

    it('should return the first and the last node', () => {
        const list = ListNodeHelper.fromArray([4, 1, 2, 3, 5, 6]);
        const { mergedHead, mergedTail } = merge(
            list,
            list.next,
            list.next.next
        );
        expect(mergedHead.val).toEqual(1);
        expect(mergedTail.val).toEqual(4);
    });

    it('should reset the `next` of the tail', () => {
        const list = ListNodeHelper.fromArray([4, 1, 2, 3, 5, 6]);
        const { mergedTail } = merge(list, list.next, list.next.next);
        expect(mergedTail.next).toBeNull();
    });
});

describe('148. Sort List', () => {
    it('should return a sorted list', () => {
        const lengths = [1, 2, 3, 10000];
        lengths.forEach(length => {
            const sorted = sortList(ListNodeHelper.randomNumberList(length));
            expect(sorted).toBeInstanceOf(ListNode);
            expect(ListNodeHelper.getLengthOf(sorted)).toEqual(length);
            expect(ListNodeHelper.isSorted(sorted)).toBeTruthy();
        });
    });
});
