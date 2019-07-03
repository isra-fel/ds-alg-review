import { ListNode } from './data-structures';

export type NumberList = ListNode<number>;

export function sortList(head: NumberList): NumberList {
    let step = 1;
    while (true) {
        let firstHead = head;
        let secondHead = stepIn(firstHead, step);
        if (!secondHead) {
            break;
        }
        let thirdHead = stepIn(secondHead, step);

        let newHead: NumberList;
        let lastTail: NumberList;

        while (secondHead) {
            const { mergedHead, mergedTail } = merge(
                firstHead,
                secondHead,
                thirdHead
            );
            newHead = newHead || mergedHead;
            if (lastTail) {
                lastTail.next = mergedHead;
            }
            lastTail = mergedTail;

            firstHead = thirdHead;
            secondHead = stepIn(firstHead, step);
            thirdHead = stepIn(secondHead, step);
        }
        if (firstHead && lastTail) {
            lastTail.next = firstHead;
        }
        head = newHead;
        step *= 2;
    }
    return head;
}

export function stepIn(from: NumberList, steps: number): NumberList {
    let i = 0;
    while (i++ !== steps) {
        if (!from) {
            return from;
        }
        from = from.next;
    }
    return from;
}

export function merge(
    start: NumberList,
    middle: NumberList,
    end: NumberList
): { mergedHead: NumberList; mergedTail: NumberList } {
    let first = start;
    let second = middle;
    let mergedHead: NumberList;
    let mergedTail: NumberList;
    while (first !== middle && second !== end) {
        if (first.val < second.val) {
            mergedHead = mergedHead || first;
            if (mergedTail) {
                mergedTail.next = first;
            }
            mergedTail = first;
            first = first.next;
        } else {
            mergedHead = mergedHead || second;
            if (mergedTail) {
                mergedTail.next = second;
            }
            mergedTail = second;
            second = second.next;
        }
    }
    while (first !== middle) {
        mergedTail.next = first;
        mergedTail = first;
        first = first.next;
    }
    while (second !== end) {
        mergedTail.next = second;
        mergedTail = second;
        second = second.next;
    }
    mergedTail.next = null;
    return { mergedHead, mergedTail };
}
