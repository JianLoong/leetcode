/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = s => {
  const map = new Map();
  for (let c = 0; c < s.length; c++) {
    if (!map.has(s[c])) {
      map.set(s[c], 1);
    } else {
      const value = map.get(s[c]);
      map.set(s[c], value + 1);
    }
  }

  console.log(map);

  for (let c = 0; c < s.length; c++) {
    if (map.get(s[c]) === 1) {
      return c;
    }
  }
  return -1;
};

s = "loveleetcode";

console.log(firstUniqChar(s));
