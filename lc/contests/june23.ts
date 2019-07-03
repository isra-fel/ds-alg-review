export function sampleStats(count: number[]) {
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;
    let countAll = 0;
    let mode = 0;
    let currentOccur = 0;
    let median = 0;
    for (let i = 0; i !== count.length; ++i) {
        if (count[i]) {
            min = Math.min(min, i);
            max = Math.max(max, i);
            sum += count[i] * i;
            countAll += count[i];
            if (count[i] > currentOccur) {
                mode = i;
                currentOccur = count[i];
            }
        }
    }
    (function findMedian() {
        let i = 0;
        let j = count.length - 1;
        while (i < j) {
            while (!count[i] && i < count.length - 1) {
                ++i;
            }
            while (!count[j] && j > 0) {
                --j;
            }
            if (count[i] === count[j] && i < j) {
                ++i;
                --j;
            } else if (count[i] < count[j]) {
                count[j] -= count[i];
                ++i;
            } else if (count[i] > count[j]) {
                count[i] -= count[j];
                --j;
            }
        }
        median = (i + j) / 2;
    })();
    return [min, max, sum / countAll, median, mode];
}

export function carPooling(trips: number[][], capacity: number) {
    const changes = [capacity];
    trips.forEach(([num, start, end]) => {
        if (changes[start]) {
            changes[start] -= num;
        } else {
            changes[start] = -num;
        }
        if (changes[end]) {
            changes[end] += num;
        } else {
            changes[end] = num;
        }
    });
    let seats = 0;
    for (let i = 0; i !== changes.length; ++i) {
        if (changes[i]) {
            seats += changes[i];
            if (seats < 0) {
                return false;
            }
        }
    }
    return true;
}

export interface MountainArray {
    get(index: number): number;
    length(): number;
}

// this is the original version during the contest, with runtime error when data is big
// for an AC version, see `lc/find-in-mountain-array-1095.ts`
export function findInMountainArray(
    target: number,
    mountainArr: MountainArray
): number {
    function searchIn(left: number, right: number): number {
        if (left > right) {
            return -1;
        }
        if (left === right) {
            return getHeight(left) === target ? left : -1;
        }

        const iPivot = Math.floor((left + right) / 2);
        const pivot = getHeight(iPivot);
        if (target === pivot) {
            const foundToLeft = searchIn(left, iPivot - 1);
            return foundToLeft === -1 ? iPivot : foundToLeft;
        }

        if (pivot >= getHeight(left) && pivot >= getHeight(right)) {
            const foundToLeft = searchIn(left, iPivot - 1);
            if (foundToLeft !== -1) {
                return foundToLeft;
            }

            const foundToRight = searchIn(iPivot + 1, right);
            return foundToRight;
        }

        if (getHeight(left) <= pivot && pivot <= getHeight(right)) {
            if (target < pivot) {
                return biSearchIn(left, iPivot - 1);
            } else {
                return searchIn(iPivot + 1, right);
            }
        }

        if (getHeight(left) >= pivot && pivot >= getHeight(right)) {
            if (target < pivot) {
                return biSearchIn(iPivot + 1, right);
            } else {
                return searchIn(left, iPivot - 1);
            }
        }
    }

    function biSearchIn(left, right): number {
        if (left > right) {
            return -1;
        }
        if (left === right) {
            return getHeight(left) === target ? left : -1;
        }

        const iPivot = Math.floor((left + right) / 2);
        const pivot = getHeight(iPivot);
        if (target === pivot) {
            return iPivot;
        }

        if (getHeight(left) < getHeight(right)) {
            if (target < pivot) {
                return biSearchIn(left, iPivot - 1);
            } else {
                return biSearchIn(iPivot + 1, right);
            }
        } else {
            if (target < pivot) {
                return biSearchIn(iPivot + 1, right);
            } else {
                return biSearchIn(left, iPivot - 1);
            }
        }
    }

    function getHeight(index) {
        if (!cache.has(index)) {
            cache.set(index, mountainArr.get(index));
        }
        return cache.get(index);
    }

    const cache = new Map();
    return searchIn(0, mountainArr.length() - 1);
}
