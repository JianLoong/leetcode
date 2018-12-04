/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const arr = (digits + "").split("");
  let result = [];
  let permutations = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "2":
        result.push(["a", "b", "c"]);
        break;
      case "3":
        result.push(["d", "e", "f"]);
        break;
      case "4":
        result.push(["g", "h", "i"]);
        break;
      case "5":
        result.push(["j", "k", "l"]);
        break;
      case "6":
        result.push(["m", "n", "o"]);
        break;
      case "7":
        result.push(["p", "q", "r", "s"]);
        break;
      case "8":
        result.push(["t", "u", "v"]);
    }
  }
};
