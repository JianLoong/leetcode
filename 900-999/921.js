/**
 * Naive solution using a stack.
 *
 * If "{" is encountered, add it to the stack, otherwise
 * check if the stack is not empty.
 *
 * If it not empty, pop the element from the stack, because it
 * is valid. Otherwise it means it is not valid and changes are needed.
 * So, increment counter.
 *
 * After that, because the stack might still have elements, we count them.
 * (The stack might still have "{" in them)
 *
 * @param {string} S
 * @return {number}
 */
const minAddToMakeValid = S => {
  let stack = [];
  let counter = 0;

  for (let bracket of S) {
    //console.log(bracket);
    if (bracket === "(") {
      stack.push("(");
    } else {
      // Closing bracket.
      if (stack.length != 0) {
        let element = stack.pop();
      } else {
        counter++;
      }
    }
  }

  while (stack.length != 0) {
    counter++;
    stack.pop();
  }

  return counter;
};

const input = "())";

console.log(minAddToMakeValid(input));
