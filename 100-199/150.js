/**
 * Stack based solution.
 *
 * Loop through the tokens, if an operator is found, pop the two elements
 * from the stack and use the operator on them, otherwise it must be a number
 * so add it to the stack.
 *
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = tokens => {
  let token = [];
  let validOperators = ["+", "-", "*", "/"];
  for (let character of tokens) {
    if (validOperators.includes(character)) {
      let left = new Number(token.pop());
      let right = new Number(token.pop());
      let result = 0;
      switch (character) {
        case "+":
          result = right + left;
          break;
        case "*":
          result = right * left;
          break;
        case "-":
          result = right - left;
          break;
        case "/":
          result = Math.trunc(right / left);
          break;
      }
      token.push(result);
    } else {
      token.push(character);
    }
  }

  return token.pop();
};

const input = [
  "10",
  "6",
  "9",
  "3",
  "+",
  "-11",
  "*",
  "/",
  "*",
  "17",
  "+",
  "5",
  "+"
];

console.log(evalRPN(input));
