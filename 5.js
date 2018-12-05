/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const result = [];
  const length = s.length;
  let notPalindromeIndex = 0;
  for (let i = 0; i < length; i++) {
    const value = s.slice(0, i + 1);
    console.log(value);
  }

  console.log(result);
};

const isPalindrome = s => {
  if (s.length == 0) return false;
  if (s.length === 2) return s[0] === s[1];
  return (
    s ===
    s
      .split("")
      .reverse()
      .join("")
  );
};
console.log(longestPalindrome("abacdfgdcaba"));
