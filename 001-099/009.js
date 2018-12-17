/**
 * @param {number} x
 * @return {boolean}
 */

// Naive solution.
var isPalindrome = function(x) {
  const arr1 = (x + "").split("");
  if (arr1[0] == -1) return false;

  return (
    arr1.join("") ==
    String(x)
      .split("")
      .reverse()
      .join("")
  );
};

input = -111;
answer = isPalindrome(input);

console.log(answer);
