/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let arr = (n + "").split("");
  let inter = [];
  let sum = 0;
  let times = 0;

  while (sum != 1) {
    sum = 0;
    for (let i = 0; i < arr.length; ++i) {
      sum += arr[i] ** 2;
    }

    inter = (sum + "").split("");
    arr = inter;
    inter = [];
    times++;

    if (times > 10) {
      return false;
    }
  }

  return true;
};

console.log(isHappy(536));
