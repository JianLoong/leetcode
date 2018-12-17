/**
 * Naive way.
 *
 * @param {string} s
 * @return {number}
 */
// var lengthOfLastWord = function(s) {
//   const words = s.trim().split(" ");

//   let length = words[words.length - 1].length;

//   return length;
// };

const lengthOfLastWord = s => {
  return s.trim().length - s.trim().lastIndexOf(" ") - 1;
};

const s = "a ";
console.log(lengthOfLastWord(s));
