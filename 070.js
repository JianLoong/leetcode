/**
 * The solution of this is basically a fibonacci sequence.
 * The "push" method seems costly and if "push" is used, it will
 * increase the runtime to 80ms. Direct assignment is much faster
 * in this scenario.
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
