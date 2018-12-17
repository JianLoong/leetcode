/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 * Naive solution.
 *
 * This solution uses the fact that even sorted, both of the words will
 * be the same. (104ms)
 */
var isAnagram = function(s, t) {
  const a = s
    .split("")
    .sort()
    .join("");
  const b = t
    .split("")
    .sort()
    .join("");

  return a === b;
};

//Using map (76ms)
var isAnagramUsingMap = (s, t) => {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      let value = map.get(s[i]) + 1;
      map.set(s[i], value);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!map.has(t[i])) {
      return false;
    } else {
      let value = map.get(t[i]) - 1;
      if (value == 0) {
        map.delete(t[i]);
      } else {
        map.set(t[i], value);
      }
    }
  }

  return map.size === 0 ? true : false;
};

console.log(isAnagramUsingMap("rat", "car"));
