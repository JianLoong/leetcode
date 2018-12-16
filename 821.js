/**
 * Naive solution.
 *
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
const shortestToChar = (s, c) => {
  const indices = [];
  const result = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == c) indices.push(i);
  }

  for (let i = 0; i < s.length; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < indices.length; j++) {
      let distance = Math.abs(indices[j] - i);
      if (distance < min) {
        min = distance;
      }
    }
    result.push(min);
  }

  return result;
};

const s = "loveleetcode";
const c = "e";

console.log(shortestToChar(s, c));
