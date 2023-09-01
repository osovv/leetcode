// https://leetcode.com/problems/climbing-stairs/

function climbStairs(n: number): number {
    let cache: number[] = []

    function helper(num: number) {
        if (n <= 3) { return num }
        if (!cache[num]) { cache[num] = helper(num - 2) + helper(num - 1) }
        return cache[num]
    }

    return helper(n)
};