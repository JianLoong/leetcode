/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = s => {
  const map = new Map();
  for (let character of s) {
    if (!map.has(character)) {
      map.set(character, 1);
    } else {
      let value = map.get(character);
      map.set(character, value + 1);
    }
  }

  let result = [...map];

  result.sort((a, b) => b[1] - a[1]);

  let ret = "";
  for (let s of result) {
    let count = map.get(s[0]);
    for (let a = 0; a < count; a++) {
      ret += s[0];
    }
  }

  return ret;
};

const input = "tree";

console.log(frequencySort(input));
