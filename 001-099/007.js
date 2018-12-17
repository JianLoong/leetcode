/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(n) {
  const sign = Math.sign(n);
  n = (n + "").split("");

  if (sign === -1) n.shift();

  const result = parseInt(n.reverse().join(""));

  if (parseInt(result) > 2 ** 31) {
    return 0;
  }

  return sign !== -1 ? parseInt(result) : result * -1;
};

const a = "1534236469";
const result = reverse(a);
console.log(result);
