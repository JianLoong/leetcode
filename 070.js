/**
 * The solution of this is basically a fibonacci sequence.
 * 
 * 
 * @param {number} n
 * @return {number}
 */
const climbStairs = n => {
    const memo = [];
    memo.push(1);
    memo.push(2);
    for(let i = 2; i < n; ++i){
        memo[i] = memo[i - 1] + memo[i - 2];
    }
    return memo[n - 1];
};

const input = 5;

console.log(climbStairs(input));
