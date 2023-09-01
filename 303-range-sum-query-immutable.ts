// https://leetcode.com/problems/range-sum-query-immutable/


// Version 1: Slow but low in Memory
class NumArrayV1 {
    numbers: number[]
    constructor(nums: number[]) {
        this.numbers = nums
    }

    sumRange(left: number, right: number): number {
        let res = 0;
        for (let i = left; i <= right; i++) {
            res += this.numbers[i]
        }
        return res
    }
}

// Version 2: Fast but high in Memory
class NumArrayV2 {
    numbers: number[]
    sums: { [i: number]: number }
    constructor(nums: number[]) {
        this.numbers = nums
        this.sums = {}
        this.numbers.reduce((acc, x, i) => {
            const curr = acc + x
            this.sums[i] = curr

            return curr;
        }, 0)
    }

    sumRange(left: number, right: number): number {
        if (left === 0) {
            return this.sums[right]
        }
        return this.sums[right] - this.sums[left - 1]
    }
}
