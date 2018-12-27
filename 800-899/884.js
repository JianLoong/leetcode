/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  let arrA = A.split(" ");
  let arrB = B.split(" ");
  let map = new Map();

  for (let word of arrA) {
    if (!map.has(word)) {
      map.set(word, 1);
    } else {
      let value = map.get(word);
      map.set(word, value + 1);
    }
  }

  for (let word of arrB) {
    if (!map.has(word)) {
      map.set(word, 1);
    } else {
      let value = map.get(word);
      map.set(word, value + 1);
    }
  }

  let result = [];
  for (let value of map) {
    if (value[1] == 1) result.push(value[0]);
  }

  console.log(map);

  return result;
};

const A = "apple apple";
const B = "banana";
console.log(uncommonFromSentences(A, B));
