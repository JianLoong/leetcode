/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let result = "";
  const words = s.split(" ");
  for (let word of words) {
    result += word
      .split("")
      .reverse()
      .join("");
    result += " ";
  }

  return result.trim();
};

const s = "Let's take LeetCode contest";
console.log(reverseWords(s));
