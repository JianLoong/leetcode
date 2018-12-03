/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const firstRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const secondRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const thirdRow = ["z", "x", "c", "v", "b", "n", "m"];

  const result = [];

  for (let word of input) {
    console.log(word);
  }

  return result;
};

const input = ["Hello", "Alaska", "Dad", "Peace"];

console.log(findWords(input));
