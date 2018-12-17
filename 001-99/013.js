/**
 * Naive solution.
 *
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  const arr = s.split("");
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "V":
        if (arr[i - 1] == "I") {
          result += 4 - 1;
        } else {
          result += dict[arr[i]];
        }
        break;
      case "X":
        if (arr[i - 1] == "I") {
          result += 9 - 1;
        } else {
          result += dict[arr[i]];
        }
        break;
      case "L":
        if (arr[i - 1] == "X") {
          result += 40 - 10;
        } else {
          result += dict[arr[i]];
        }
        break;

      case "C":
        if (arr[i - 1] == "X") {
          result += 90 - 10;
        } else {
          result += dict[arr[i]];
        }
        break;

      case "D":
        if (arr[i - 1] == "C") {
          result += 400 - 100;
        } else {
          result += dict[arr[i]];
        }
        break;

      case "M":
        if (arr[i - 1] == "C") {
          result += 900 - 100;
        } else {
          result += dict[arr[i]];
        }
        break;

      default:
        result += dict[arr[i]];
    }
  }

  return result;
};

const a = "MCMXCIV";
console.log(romanToInt(a));
