/**
 * DP solution. 48ms
 *
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  let fib = [0, 1];

  for (let i = 2; i <= N; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib[N];
};

const input = 2;

console.log(fib(input));
