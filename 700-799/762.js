/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
  let result = 0;
  for (let i = L; i <= R; i++) {
    let bit = bitCount(i);
    if (isSmallPrime(bit)) {
      result++;
    }
  }

  return result;
};

const bitCount = n => {
  n = n - ((n >> 1) & 0x55555555);
  n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
  return (((n + (n >> 4)) & 0xf0f0f0f) * 0x1010101) >> 24;
};

const isSmallPrime = x => {
  return (
    x == 2 ||
    x == 3 ||
    x == 5 ||
    x == 7 ||
    x == 11 ||
    x == 13 ||
    x == 17 ||
    x == 19
  );
};

console.log(bitCount(3));
