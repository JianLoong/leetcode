/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = words => {
  const MORSE = [
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

  const seen = new Set();
  for (let word of words) {
    let code = "";
    for (let c of word) {
      const value = MORSE[c.charCodeAt(0) - "a".charCodeAt(0)];
      code += value;
    }
    seen.add(code);
  }

  return seen.size;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
