export interface MountainArray {
    get(index: number): number;
    length(): number;
}

export function findInMountainArray(
    target: number,
    mountainArr: MountainArray
): number {
    const cache = new Map<number, number>();
    const length = mountainArr.length();
    const peakIndex = findPeak(0, length - 1);
    let foundInLeft = -1;
    if (0 < peakIndex) {
        foundInLeft = biSearch(0, peakIndex, true);
    }
    if (foundInLeft !== -1) {
        return foundInLeft;
    } else {
        return biSearch(peakIndex, length - 1, false);
    }

    function findPeak(left: number, right: number): number {
        if (right - left <= 1) {
            if (getHeight(left) > getHeight(right)) {
                return left;
            } else {
                return right;
            }
        }
        const iSample1 = Math.floor((left + right) / 2);
        const sample1 = getHeight(iSample1);

        const iSample2 = Math.floor((iSample1 + right) / 2);
        const sample2 = getHeight(iSample2);

        if (sample1 > sample2) {
            return findPeak(left, iSample2);
        } else {
            return findPeak(iSample1, right);
        }
    }

    function getHeight(index: number): number {
        if (!cache.has(index)) {
            cache.set(index, mountainArr.get(index));
        }
        return cache.get(index);
    }

    function biSearch(left: number, right: number, isAsc: boolean): number {
        if (left >= right) {
            return getHeight(left) === target ? left : -1;
        }
        const iMid = Math.floor((left + right) / 2);
        const mid = getHeight(iMid);
        if (mid === target) {
            return iMid;
        } else if ((isAsc && target < mid) || (!isAsc && target > mid)) {
            return biSearch(left, iMid - 1, isAsc);
        } else {
            return biSearch(iMid + 1, right, isAsc);
        }
    }
}
