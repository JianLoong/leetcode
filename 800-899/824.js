/**
 * Naive solution. (56ms)
 *
 * @param {string} S
 * @return {string}
 */
const toGoatLatin = S => {
  const vowel = ["a", "e", "i", "o", "u"];
  let words = S.split(" ");
  let result = "";
  let counter = 0;

  for (let word of words) {
    counter++;
    if (vowel.includes(word[0].toLowerCase())) {
      result += word + "ma";
    } else {
      // Remove first letter append it to the end.
      result += word.slice(1, word.length) + word[0] + "ma";
    }

    for (let count = 0; count < counter; count++) result += "a";
    result += " ";
  }

  return result.trim();
};

const input = "The quick brown fox jumped over the lazy dog";

console.log(toGoatLatin(input));
