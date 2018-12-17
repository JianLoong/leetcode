/**
 *
 *
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  let ans = [];
  let stack = [];
  for (let i = T.length - 1; i >= 0; --i) {
    while (stack.length != 0 && T[i] >= T[stack[stack.length - 1]]) {
      stack.pop();
    }

    if (stack.length === 0) {
      ans[i] = 0;
    } else {
      ans[i] = stack[stack.length - 1] - i;
    }
    stack.push(i);
  }
  return ans;
};

const input = [73, 74, 75, 71, 69, 72, 76, 73];

// Result = [1, 1, 4, 2, 1, 1, 0, 0]

console.log(dailyTemperatures(input));
