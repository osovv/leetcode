// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/


// Version 1 (Dumb):
function findDisappearedNumbersV1(nums: number[]): number[] {
    const n = nums.length
    const toAppear = new Set(Array.from({ length: n }, (_, i) => i + 1));
    nums.forEach((num) => toAppear.delete(num))
    return Array.from(toAppear)
};


// Version 2 (Cyclic Sort):
function findDisappearedNumbersV2(nums: number[]): number[] {
    let i = 0;
    while (i < nums.length) {
        const el = nums[i] - 1;
        if (nums[i] != nums[el]) {
            const tmp = nums[i]
            nums[i] = nums[el]
            nums[el] = tmp
        } else {
            i++;
        }
    }
    const res: number[] = [];

    nums.forEach((v, i) => {
        if (v !== i + 1) {
            res.push(i + 1)
        }
    })

    return res;
};