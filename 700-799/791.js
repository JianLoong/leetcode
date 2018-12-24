/**
 * Naive solution. Build a numeric map based on the order.
 *
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
  let orderMap = {};
  let i = 0;
  for (let s of S) {
    orderMap[s] = i;
    i++;
  }

  let value = T.split("");

  value.sort((a, b) => {
    if (orderMap[a] === undefined) return 1;
    if (orderMap[b] == undefined) return -1;
    return orderMap[a] - orderMap[b];
  });
  return value.join("");
};

const S = "exv";
const T = "xwvee";

console.log(customSortString(S, T));
