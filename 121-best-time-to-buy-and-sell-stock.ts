// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices: number[]): number {
    let buy = prices[0];
    let i = 1;
    let res = 0;

    while (i < prices.length) {
        res = Math.max(prices[i] - buy, res)
        buy = Math.min(buy, prices[i])
        i++;
    }

    return res;
}
