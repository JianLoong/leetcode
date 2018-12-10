/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function(digits) {
  let numString = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz"
  ];
  let ans = [];
  let target = [];
  for (let i = 0; i < digits.length; i++) {
    target.push(numString[parseInt(digits[i])]);
  }

  console.log(target);

  if (target.length > 0) {
    for (let l = 0; l < target[0].length; l++) {
      ans.push(target[0][l]);
    }
  }

  console.log(ans);

  for (let j = 1; j < target.length; j++) {
    let temp = [];
    for (let k = 0; k < target[j].length; k++) {
      for (let m = 0; m < ans.length; m++) {
        temp.push(ans[m] + target[j][k]);
      }
    }
    ans = temp;
  }

  return ans;
};

console.log(letterCombinations("237"));
