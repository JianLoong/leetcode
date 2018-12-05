/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  const map = new Map();

  let prev = "111221";

  let slow = 0;
  let fast = 1;
  let count = 0;

  for (let i = 0; i < prev.length; i++) {
    while (prev[i] == prev[fast]) {
      if (fast == prev.length - 1) break;
      fast++;
    }

    console.log(prev.slice(i, fast));

    i = fast;
  }

  return prev;
};

console.log(countAndSay(5));
