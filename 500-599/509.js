/**
 * DP solution. 48ms
 *
 * @param {number} N
 * @return {number}
 */
const fib = N => {
  let fib = [0, 1];
  for (let i = 2; i <= N; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[N];
};

/**
 * Recursive Solution. 124ms
 *
 * @param {number} n
 */
const fibRecursive = n => {
  if (n <= 1) return n;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
};

const input = 8;

console.log(fib(input));
console.log(fibRecursive(input));
