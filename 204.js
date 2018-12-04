/**
 * @param {number} n
 * @return {number}
 */
// var countPrimes = function(n) {
//   const primes = [];

//   for (let i = 0; i < n; i++) {
//     //console.log(primes);
//     if (!primes.includes(i)) {
//       if (isPrime(i)) primes.push(i);
//     }
//   }

//   //console.log(primes);

//   return primes.length;
// };

function isPrime(input) {
  let prime = true;
  for (let i = 2; i <= Math.sqrt(input); i++) {
    if (input % i == 0) {
      prime = false;
      break;
    }
  }
  return prime && input > 1;
}

function countPrimes(n) {
  let isPrime = [];
  for (let i = 2; i < n; i++) {
    isPrime[i] = true;
  }
  // Loop's ending condition is i * i < n instead of i < sqrt(n)
  // to avoid repeatedly calling an expensive function sqrt().
  for (let i = 2; i * i < n; i++) {
    if (!isPrime[i]) continue;
    for (let j = i * i; j < n; j += i) {
      isPrime[j] = false;
    }
  }
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) count++;
  }
  return count;
}

console.log(countPrimes(499979));
