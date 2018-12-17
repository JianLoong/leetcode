/**
 * @param {string} s
 * @return {boolean}
 */

// Naive solution (52ms)
var isValid = function(s) {
  const stack = [];
  const arr = s.split("");
  const opening = ["(", "{", "["];
  const dict = {
    "{": "}",
    "[": "]",
    "(": ")"
  };

  if (arr.length % 2 != 0) return false;

  for (let symbol of arr) {
    if (opening.includes(symbol)) {
      stack.push(symbol);
    } else {
      let value = stack.pop();
      // Compare the symbol to the poped
      value = dict[value];
      if (symbol !== value) return false;
    }
  }

  if (stack.length != 0) return false;
  return true;
};

console.log(isValid("(()"));
