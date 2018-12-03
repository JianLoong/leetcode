/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const reversed = s
    .split("")
    .reverse()
    .join("");

  return reversed === s;
};

console.log(isPalindrome("race a car"));
