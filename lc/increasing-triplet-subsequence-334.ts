export function increasingTriplet(nums: number[]): boolean {
    let min = Infinity;
    let secondMin = Infinity;
    for (let i = 0; i !== nums.length; ++i) {
        if (isFinite(secondMin) && nums[i] > secondMin) {
            return true;
        }

        if (nums[i] < min) {
            min = nums[i];
        }

        if (nums[i] < secondMin && nums[i] > min) {
            secondMin = nums[i];
        }
    }
    return false;
}
