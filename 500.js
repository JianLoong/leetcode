/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = words => {
  const firstRow = new Set(["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]);
  const secondRow = new Set(["a", "s", "d", "f", "g", "h", "j", "k", "l"]);
  const thirdRow = new Set(["z", "x", "c", "v", "b", "n", "m"]);

  const result = [];
  for (let word of words) {
    let firstRowCount = 0;
    let secondRowCount = 0;
    let thirdRowCount = 0;
    for (let character of word) {
      if (firstRow.has(character.toLowerCase())) {
        firstRowCount++;
      }
      if (secondRow.has(character.toLowerCase())) {
        secondRowCount++;
      }

      if (thirdRow.has(character.toLowerCase())) {
        thirdRowCount++;
      }
    }

    if (firstRowCount === word.length) {
      result.push(word);
    }

    if (secondRowCount === word.length) {
      result.push(word);
    }

    if (thirdRowCount === word.length) {
      result.push(word);
    }
  }

  return result;
};

const input = ["Hello", "Alaska", "Dad", "Peace"];

console.log(findWords(input));
