export function findPeakElement(nums: number[]): number {
    function searchIn(left: number, right: number): number {
        if (left === right) {
            return left;
        }
        if (left === right - 1) {
            return nums[left] > nums[right] ? left : right;
        }

        const iMid = Math.floor((left + right) / 2);
        const mid = nums[iMid];

        if (mid < nums[right]) {
            return searchIn(iMid, right);
        }

        if (nums[left] > mid) {
            return searchIn(left, iMid);
        }

        if (nums[iMid - 1] > mid) {
            return searchIn(left, iMid);
        }

        if (nums[iMid + 1] > mid) {
            return searchIn(iMid, right);
        }

        return iMid;
    }

    if (!nums.length) {
        return -1;
    }
    return searchIn(0, nums.length - 1);
}
