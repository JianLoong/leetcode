/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) result.push("FizzBuzz");
    else {
      if (i % 3 == 0) {
        result.push("Fizz");
      } else {
        if (i % 5 == 0) {
          result.push("Buzz");
        } else {
          result.push(i + "");
        }
      }
    }
  }

  return result;
};

// This FizzBuzz uses case, however it can be considered not very clear
// It however shows an undertanding of the switch construct.
var fizzBuzzCase = n => {
  const result = [];
  for (let i = 1; i <= n; i++) {
    switch (true) {
      case i % 3 == 0 && i % 5 == 0:
        result.push("FizzBuzz");
        break;
      case i % 5 == 0:
        result.push("Buzz");
        break;
      case i % 3 == 0:
        result.push("Fizz");
        break;
      default:
        result.push(i + "");
    }
  }
  return result;
};

console.log(fizzBuzzCase(15));
