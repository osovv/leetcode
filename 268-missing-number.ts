// https://leetcode.com/problems/missing-number/submissions/


function missingNumber(nums: number[]): number {
    const n = nums.length
    const total = n * (n + 1) / 2
    const sum = nums.reduce((a, b) => a + b)
    return total - sum
};