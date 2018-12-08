/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  let MORSE = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--.."
  ];

  let seen = new Set();
  for (let word of words) {
    let code = "";
    console.log(word);
    for (let c of word) {
      const value = MORSE[c.charCodeAt(0) - 97];
      code += value;
    }
    seen.add(code);
  }

  return seen.size;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
