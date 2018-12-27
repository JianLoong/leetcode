/**
 * Using a stack (56ms)
 * However, this is actually a two pass solution.
 *
 * @param {string[]} ops
 * @return {number}
 */
const calPoints = function(ops) {
  let stack = [];
  let sum = 0;
  for (let op of ops) {
    if (op !== "C" && op !== "D" && op != "+") {
      stack.push(Number(op));
    } else {
      switch (op) {
        case "C":
          stack.pop();
          break;
        case "D":
          let value = Number(stack[stack.length - 1]) * 2;
          stack.push(value);
          break;
        case "+":
          let length = stack.length;
          let plus = Number(stack[length - 1]) + Number(stack[length - 2]);
          stack.push(plus);
          break;
      }
    }
  }

  stack.forEach(value => (sum += value));

  return sum;
};

/**
 * Using stack, however this is a one pass.
 *
 * @param {string[]} ops
 * @return {number}
 */
const calPointsMethodTwo = ops => {
  let stack = [];
  let sum = 0;
  for (let op of ops) {
    if (op !== "C" && op !== "D" && op != "+") {
      stack.push(op);
      sum += Number(op);
    } else {
      switch (op) {
        case "C":
          sum -= stack.pop();
          break;
        case "D":
          let value = Number(stack[stack.length - 1]) * 2;
          stack.push(value);
          sum += value;
          break;
        case "+":
          let length = stack.length;
          let plus = Number(stack[length - 1]) + Number(stack[length - 2]);
          stack.push(plus);
          sum += plus;
          break;
      }
    }
  }
  return sum;
};
const input = ["5", "-2", "4", "C", "D", "9", "+", "+"];

console.log(calPoints(input));
