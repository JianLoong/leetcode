/**
 * @param {string} S
 * @return {number}
 */
const scoreOfParentheses = S => {
  let stack = [];
  stack.push(0);

  for (let c of S) {
    if (c == "(") stack.push(0);
    else {
      let v = stack.pop();
      let w = stack.pop();
      stack.push(w + Math.max(2 * v, 1));
    }
  }

  return stack.pop();
};
