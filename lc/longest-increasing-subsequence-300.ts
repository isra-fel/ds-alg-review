export function lengthOfLIS(nums: number[]): number {
    if (!nums.length) {
        return 0;
    }

    const longest = [1];
    for (let i = 1; i !== nums.length; ++i) {
        let tempMax = 1;
        for (let j = 0; j !== i; ++j) {
            if (nums[j] < nums[i]) {
                tempMax = Math.max(tempMax, longest[j] + 1);
            }
        }
        longest.push(tempMax);
    }

    return Math.max(...longest);
}
