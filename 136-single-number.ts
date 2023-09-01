// https://leetcode.com/problems/single-number/

function singleNumber(nums: number[]): number {
    let res = nums[0];
    let i = 1;

    while (i < nums.length) {
        res ^= nums[i];
        i++;
    }

    return res;
};